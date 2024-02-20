export const Validate = (schema, data) => {
  const result = schema.validate(data, {
    abortEarly: false
  }) 

 if (result.error) {
  throw result.error;
 } else {
  return result.value
 }
}
