import React from "react";
import './error.css'

export default function Error() {
  console.log('ERRRR');
  
  function fnReload() {
    window.location.reload();
  }

  return (
    <div className="err">
      <div>Произошла ошибка!</div>
      <button onClick={fnReload}>Повторить запрос</button>
    </div>
  )
}
