import {useState} from "react";

function Conditional() {

  const [email, setEmail] = useState();
  const [userEmail, setUserEmail] = useState();

  function enviarEmail(e) {
    e.preventDefault();
    setUserEmail(email)
  }

  function mailClear(){
    setUserEmail(null)
  }

  return(
    <>
      <div>
        <input type="email"
               placeholder="Insira seu E-mail aqui..."
               onChange={(e)=>setEmail(e.target.value)}
        />
        <button type="submit"
                onClick={enviarEmail}>Enviar E-mail</button>
      </div>
      <br/>
      <div>
        {userEmail && (
          <div>
            <p>{`O email que vc enviou é ${userEmail}`}</p>
            <button onClick={mailClear}>Apagar</button>
          </div>
        )}
      </div>
    </>
  )
}

export default Conditional;