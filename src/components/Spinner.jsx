import React from "react";
import './spinner.css'

export default function Spinner() {

  return (
    <div class="spinner">
        <span class="spinner__animation"></span>
        <span class="spinner__info">Загрузка...</span>
    </div>
  )
}