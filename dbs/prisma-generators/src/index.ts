// @index(['./**/*.ts', '!./**/*.{spec,test,generator,logger}.ts'], f => `export * from '${f.path}.js'`)
export * from './swagger/generate-swagger.js'
export * from './zod/generate-zod.js'

