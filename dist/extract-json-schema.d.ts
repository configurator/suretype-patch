import type { ExportRefMethod, OnTopLevelNameConflict, OnNonSuretypeValidator } from "./types.js";
import { CoreValidator } from "./validators/core/validator.js";
export interface ExtractJsonSchemaOptions {
    refMethod?: ExportRefMethod;
    onTopLevelNameConflict?: OnTopLevelNameConflict;
    onNonSuretypeValidator?: OnNonSuretypeValidator;
}
export interface SchemaWithDefinitions {
    definitions: {
        [name: string]: any;
    };
}
export interface ExtractedJsonSchema {
    /**
     * The extracted schema definitions
     */
    schema: SchemaWithDefinitions;
    /**
     * Lookup from validator to schema object
     */
    lookup: Map<CoreValidator<unknown>, any>;
    /**
     * Lookup from top-level schema object to its corresponding name.
     * This is its referrable name, which might not be the same as its inner
     * name if it had to be renamed due to top-level naming conflicts.
     */
    schemaRefName: Map<any, string>;
}
/**
 * Get the JSON schema (as a JavaScript object) for an array of schema
 * validators.
 *
 * @param validators The validators to get the JSON schema from.
 */
export declare function extractJsonSchema(validators: Array<CoreValidator<unknown>>, { refMethod, onTopLevelNameConflict, onNonSuretypeValidator, }?: ExtractJsonSchemaOptions): ExtractedJsonSchema;
export type ExtractSingleSchemaResult = {
    schema: Record<string, any>;
    fragment?: undefined;
} | {
    schema: SchemaWithDefinitions;
    fragment: string;
};
/**
 * Get the JSON schema (as a JavaScript object) for a single schema validator.
 *
 * @param validator The validator to get the JSON schema from.
 * @returns { schema, fragment } where either schema is a single schema and
 *          fragment is undefined, or schema is a definition schema (with
 *          multiple fragments) and fragment specifies the specific fragment.
 */
export declare function extractSingleJsonSchema(validator: CoreValidator<unknown>): ExtractSingleSchemaResult;
