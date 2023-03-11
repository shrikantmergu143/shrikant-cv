import React from 'react'

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="fxt-footer-section bg-color-2">
        <div className="container">
            <div className="fxt-footer-box-layout1">
                <div className="copyright-text">{year} Ree. All Rights Reserved.</div>
            </div>
        </div>
    </footer>
  )
}
