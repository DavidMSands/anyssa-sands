import React from 'react'
import { Link } from "react-router-dom"

function InquireButton() {
  return (
    <div id="buttonid">
        <Link to="/inquire"><button type="button" id="inquireButton" onclick="location.href='inquire.html'">Inquire</button></Link>
    </div>
  )
}

export default InquireButton