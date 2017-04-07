import { saveContent } from 'redux/note'
import { setEncryptedContent, setLoading } from 'redux/vault'
import { encrypt } from '../../../../services/encryption'
import { saveVault } from '../../../../services/google-api'

export const saveNote = (event, passphrase, content) => (dispatch) => {
  dispatch(setLoading(true))
  encrypt(passphrase, content).then((ciphertext) => {
    dispatch(setEncryptedContent(ciphertext))
    return saveVault({ data: ciphertext })
  }).then((e) => {
    // console.log(e)
    dispatch(saveContent())
    dispatch(setLoading(false))
  }).catch(() => {
    console.log('ko')
  })
}
