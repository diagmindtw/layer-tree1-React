import React from 'react'

import { Helmet } from 'react-helmet'

import './google-pixel21.css'

const GooglePixel21 = (props) => {
  return (
    <div className="google-pixel21-container">
      <Helmet>
        <title>exported project</title>
        <meta property="og:title" content="exported project" />
        <link rel="canonical" href="https://kcms0.diagmindtw.com/" />
        <meta property="og:url" content="https://kcms0.diagmindtw.com/" />
      </Helmet>
      <div className="google-pixel21-thq-google-pixel21-elm">
        <div className="google-pixel21-thq-frame1-elm">
          <div className="google-pixel21-thq-frame2-elm">
            <span className="google-pixel21-thq-text-elm1">樹狀頁面編輯</span>
          </div>
          <div className="google-pixel21-thq-frame3-elm">
            <div className="addPage">
              <span className="google-pixel21-thq-text-elm2">新增頁面</span>
            </div>
            <div className="google-pixel21-thq-frame5-elm">
              <span className="google-pixel21-thq-text-elm3">儲存</span>
            </div>
          </div>
        </div>
        <div className="google-pixel21-thq-frame1-copy-elm"></div>
      </div>
    </div>
  )
}

export default GooglePixel21
