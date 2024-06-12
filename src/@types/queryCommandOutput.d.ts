export declare type QueryCommandOutput = Omit<__QueryCommandOutput, 'Items' | 'LastEvaluatedKey'> & {
  Items?: Record<string, NativeAttributeValue>[]

  LastEvaluatedKey?: Record<string, NativeAttributeValue>
}
