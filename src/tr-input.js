class TrInput extends HTMLInputElement {
    
    constructor() {
        super();
        this.inputElement = this;
        this.spanElement = null;
        // get the helper class width for calculations latter on
        this.inputPaddingRight = parseInt(window.getComputedStyle(this.inputElement, null).getPropertyValue('padding-right'));
        this.inputPaddingLeft = parseInt(window.getComputedStyle(this.inputElement, null).getPropertyValue('padding-left'));
        this.contentWidth = this.inputElement.clientWidth - this.inputPaddingRight - this.inputPaddingLeft;

        this._registerEventListeners();
        this._createDummyElements();
    }

    _registerEventListeners() {
        this.inputElement.addEventListener('input', this._inputListener);
    }

    _inputListener() {
        if(this.inputElement.type === 'password') {
            // password type replaces text with dots,
            // TODO: check ies solution the show password 
            this.spanElement.innerText = '•'.repeat(this.inputElement.value.length);
        } else {
            this.spanElement.innerText = this.inputElement.value;
        }
    }

    _createDummyElements() {
        this.spanElement = document.createElement('span');
        // copying font styles so the helper has the same content length
        this.spanElement.style = `
            position: fixed;
            z-index: -1;
            pointer-events: none;
            visibility: hidden;
            top: -10vh;
            top: - 20px;
            max-width: ${this.contentWidth}px;
            white-space: nowrap;
            word-break: keep-all;
            font-size: ${window.getComputedStyle(this.inputElement, null).getPropertyValue('font-size')};
            font-family: ${window.getComputedStyle(this.inputElement, null).getPropertyValue('font-family')};
            font-style: ${window.getComputedStyle(this.inputElement, null).getPropertyValue('font-style')};
            letter-spacing: ${window.getComputedStyle(this.inputElement, null).getPropertyValue('letter-spacing')};
            text-transform:: ${window.getComputedStyle(this.inputElement, null).getPropertyValue('text-transform:')};
        `;
        this.inputElement.parentElement.insertBefore(this.spanElement, this.inputElement);
    }

    _calculateWidthRatio() {
        return this.spanElement.clientWidth / (this.inputElement.clientWidth - this.inputPaddingLeft - this.inputPaddingRight);
    }

    getRatio() {
        return this._calculateWidthRatio();
    }

    getOffset() {
        return this.spanElement.clientWidth;
    }
}

customElements.define('tr-input', TrInput,{ extends: 'input' });