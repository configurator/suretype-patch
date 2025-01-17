import { AnyType } from "../types.js";
import { CoreValidator, InternalCoreValidator, TreeTraverser } from "../core/validator.js";
import { AnnotationsHolder } from "../../annotations.js";
export declare abstract class BaseValidator<T, U extends BaseValidator<T, U> = BaseValidator<T, any>> extends CoreValidator<T> {
    protected _parent: this | undefined;
    protected setupClone(clean: boolean, clone: U): this;
}
export declare abstract class InternalBaseValidator extends BaseValidator<unknown, any> implements InternalCoreValidator {
    _annotations: AnnotationsHolder | undefined;
    abstract type: AnyType;
    abstract toSchema(traverser: TreeTraverser): any;
    abstract clone(clean?: boolean): this;
    _parent: this | undefined;
    abstract setupClone(clean: boolean, clone: any): this;
}
export declare function exposeBaseValidator<T extends BaseValidator<unknown>>(validator: T): InternalBaseValidator;
