import { TreeTraverser, CoreValidator } from "./validators/core/validator.js";
import type { ExportRefMethod } from "./types.js";
export interface SchemaResult {
    schema: any;
    duplicates: Map<string, number>;
    lookup: Map<CoreValidator<unknown>, any>;
}
export declare class TreeTraverserImpl implements TreeTraverser {
    private refMethod;
    private allowUnnamed;
    private initialValidators;
    private extraValidators;
    private validatorNames;
    private definitions;
    private lookupMap;
    private duplicates;
    currentSchemaName: string | undefined;
    constructor(validators: Array<CoreValidator<unknown>>, refMethod: ExportRefMethod, allowUnnamed: boolean);
    visit(validator: CoreValidator<unknown>): any;
    getSchema(): SchemaResult;
    private getValidatorName;
    private insert;
    private makeRef;
    private getNextName;
}
