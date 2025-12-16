import { LightningElement, api } from 'lwc';

export default class ChildComponent extends LightningElement {
    @api productsFound = false
    @api productList

    parentCalled = false

    get hasProduct() {
        return this.productsFound == "true" ? true : false
    }

    @api handleParentCall() {
        this.parentCalled = this.parentCalled === false ? true : false
    }
}