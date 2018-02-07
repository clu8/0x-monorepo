import { Schema as JSONSchema, Validator } from 'jsonschema';
import { orderMetadataSchema } from 'ts/schemas/metadata_schema';
import { orderSchema } from 'ts/schemas/order_schema';
import { signatureDataSchema } from 'ts/schemas/signature_data_schema';
import { signedOrderSchema } from 'ts/schemas/signed_order_schema';
import { tokenSchema } from 'ts/schemas/token_schema';

export class SchemaValidator {
    private _validator: Validator;
    constructor() {
        this._validator = new Validator();
        this._validator.addSchema(signatureDataSchema as JSONSchema, signatureDataSchema.id);
        this._validator.addSchema(tokenSchema as JSONSchema, tokenSchema.id);
        this._validator.addSchema(orderMetadataSchema as JSONSchema, orderMetadataSchema.id);
        this._validator.addSchema(signedOrderSchema as JSONSchema, signedOrderSchema.id);
        this._validator.addSchema(orderSchema as JSONSchema, orderSchema.id);
    }
    public validate(instance: object, schema: Schema) {
        return this._validator.validate(instance, schema);
    }
}
