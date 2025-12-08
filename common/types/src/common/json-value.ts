export type JsonPrimitive = string | number | boolean | null;

export interface JsonArray extends ReadonlyArray<JsonValue> {
  __JsonArray__?: null;
}

export interface JsonObject
  extends Readonly<Partial<Record<string, JsonValue>>> {
  __JsonObject__?: null;
}

export type JsonValue = JsonPrimitive | JsonArray | JsonObject;
