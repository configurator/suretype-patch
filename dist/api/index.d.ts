import { CoreValidator } from "../validators/core/validator.js";
import { BaseValidator } from "../validators/base/validator.js";
import { BooleanValidator } from "../validators/boolean/validator.js";
import { NumberValidator } from "../validators/number/validator.js";
import { StringValidator } from "../validators/string/validator.js";
import { NullValidator } from "../validators/null/validator.js";
import { AnyValidator } from "../validators/any/validator.js";
import { ObjectValidator } from "../validators/object/validator.js";
import { ArrayValidator } from "../validators/array/validator.js";
import { TupleValidator } from "../validators/tuple/validator.js";
import { AnyOfValidator } from "../validators/or/validator.js";
import { AllOfValidator } from "../validators/all-of/validator.js";
import { IfValidator } from "../validators/if/validator.js";
import { RawValidator } from "../validators/raw/validator.js";
import { RecursiveValidator } from "../validators/recursive/validator.js";
import { TypeOf } from "../validators/functional.js";
import { ArrayFunction, TupleFunction } from "../validators/array-types.js";
import { ExtractObject } from "../validators/object-types.js";
import { Annotations, TopLevelAnnotations } from "../annotations.js";
import { RecursiveValue } from "../validators/types.js";
export { CoreValidator, BaseValidator, BooleanValidator, NumberValidator, StringValidator, NullValidator, AnyValidator, ObjectValidator, ArrayValidator, TupleValidator, AnyOfValidator, AllOfValidator, IfValidator, RawValidator, RecursiveValidator, };
export declare const v: {
    string: () => StringValidator<string>;
    number: () => NumberValidator<number>;
    object: <T extends {
        [key: string]: CoreValidator<unknown>;
    }>(obj: T) => ObjectValidator<ExtractObject<T>>;
    array: ArrayFunction & TupleFunction;
    boolean: () => BooleanValidator<boolean>;
    null: () => NullValidator<null>;
    anyOf: <T_1 extends CoreValidator<unknown>>(validators: readonly T_1[]) => AnyOfValidator<TypeOf<T_1>>;
    allOf: <T_2 extends CoreValidator<unknown>>(validators: readonly T_2[]) => AllOfValidator<TypeOf<T_2>>;
    if: <T_3 extends CoreValidator<unknown>>(validator: T_3) => IfValidator<TypeOf<T_3>>;
    any: () => AnyValidator<any>;
    unknown: () => AnyValidator<unknown>;
    recursive: () => RecursiveValidator;
};
/**
 * Cast a recursive value (a value in a recursive type)
 */
export declare const recursiveCast: <T>(value: RecursiveValue) => T;
/**
 * Cast a value into a recursive value (inversion of recursiveCast)
 */
export declare const recursiveUnCast: <T>(value: T) => RecursiveValue;
export declare const raw: <T = unknown>(jsonSchema: any, fragment?: string) => CoreValidator<T>;
export declare function retype<T extends CoreValidator<unknown>>(validator: T): {
    as<U>(): TypeOf<T> extends U ? CoreValidator<U> : never;
};
/**
 * Annotate a validator with a name and other decorations
 *
 * @param annotations Annotations
 * @param validator Target validator to annotate
 * @returns Annotated validator
 */
export declare function suretype<T extends CoreValidator<unknown>>(annotations: TopLevelAnnotations, validator: T): T;
export declare function annotate<T extends CoreValidator<unknown>>(annotations: Partial<Annotations>, validator: T): T;
/**
 * Ensures a validator is annotated with a name. This will not overwrite the
 * name of a validator, only ensure it has one.
 *
 * @param name The name to annotate with, unless already annotated
 * @param validator The target validator
 * @returns Annotated validator
 */
export declare function ensureNamed<T extends CoreValidator<unknown>>(name: string, validator: T): T;
