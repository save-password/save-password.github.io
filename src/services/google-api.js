/* global gapi */
export const autoSignIn = () => {
  return new Promise((resolve, reject) => {
    gapi.load('client:auth2', () => {
      gapi.client.init({
        discoveryDocs: ['https://www.googleapis.com/discovery/v1/apis/drive/v3/rest'],
        clientId: '582092887587-0mh9fgrqpjqk3lj5jvj90alpvfnelict.apps.googleusercontent.com',
        // scope: 'https://www.googleapis.com/auth/drive.appdata',
        scope: 'https://www.googleapis.com/auth/drive',
      }).then(() => {
        // gapi.auth2.getAuthInstance().signOut()
        gapi.auth2.getAuthInstance().isSignedIn.listen(() => {
          resolve(gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile())
        })

        if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
          resolve(gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile())
        } else {
          reject()
        }
      })
    })
  })
}

export const signIn = () => {
  return new Promise((resolve, reject) => {
    gapi.auth2.getAuthInstance().signIn().then(() => {
      if (gapi.auth2.getAuthInstance().isSignedIn.get()) {
        resolve(gapi.auth2.getAuthInstance().currentUser.get().getBasicProfile())
      } else {
        reject()
      }
    })
  })
}

export const findVault = () => {
  return new Promise((resolve, reject) => {
    gapi.client.drive.files.list({
      q: 'name="vault.tech" and trashed = false', // and appProperties has { key="vaultech" and value="vaultech" }
      // spaces: 'appDataFolder',
      // spaces: 'drive',
      pageSize: 100,
      fields: 'nextPageToken, files(id, name)',
    }).then((response) => {
      // console.log('Files:', response.result.files.length, response.result.files)
      const files = response.result.files
      if (files && files.length > 0) {
        resolve(files[0].id)
      } else {
        reject()
      }
    })
  })
}

const createFileWithJSONContent = (name, data, id = '') => {
  const jump = '\r\n'
  const boundary = '-------314159265358979323846'
  const delimiter = `${jump}--${boundary}${jump}`
  const closeDelim = `${jump}--${boundary}--`

  const contentType = 'application/json'

  const metadata = {
    name,
    mimeType: contentType,
  }

  const multipartRequestBody = `${delimiter}Content-Type: ${contentType}${jump}${jump}${JSON.stringify(metadata)}${delimiter}Content-Type: ${contentType}${jump}${jump}${JSON.stringify(data)}${closeDelim}`

  let lastPath = ''
  if (id) {
    lastPath = `/${id}`
  }

  return gapi.client.request({
    path: `/upload/drive/v3/files${lastPath}`,
    method: id ? 'PATCH' : 'POST',
    params: { uploadType: 'multipart' },
    headers: {
      'Content-Type': `multipart/related; boundary="${boundary}"`,
    },
    body: multipartRequestBody,
  })
}

export const saveVault = (data) => {
  return new Promise((resolve, reject) => {
    findVault().then((id) => {
      return createFileWithJSONContent('vault.tech', data, id)
    }).catch(() => {
      return createFileWithJSONContent('vault.tech', data)
    }).then((e) => {
      // console.log(e);
      if (e.status === 200) {
        resolve()
      } else {
        reject(e)
      }
    })
    .catch(() => {
      reject()
    })
  })
}

export const getVault = (id) => {
  return gapi.client.request({
    path: `/drive/v3/files/${id}?alt=media`,
    method: 'GET',
  })
}
