import React from 'react'
import './style.css';

export default function InputBox() {
    return (
        <div id="auth-number-box" className="input-box">
            <div className="label">인증번호</div>
            <div className="input-area">
                <input id="auth-number" type="text" placeholder="인증번호 4자리를 입력해주세요." />
                <div id="auth-number-button" className="input-button disable">인증 확인</div>
            </div>
            <div id="auth-number-message" className="message"></div>
        </div>

    )
}
