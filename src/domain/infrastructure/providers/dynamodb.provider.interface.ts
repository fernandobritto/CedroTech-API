import {
  DeleteCommandInput,
  DeleteCommandOutput,
  GetCommandInput,
  GetCommandOutput,
  PutCommandInput,
  PutCommandOutput,
  QueryCommandInput,
  QueryCommandOutput
} from '@aws-sdk/lib-dynamodb'

export interface IDynamoDBProvider {
  getOne(params: GetCommandInput): Promise<GetCommandOutput>
  getMany(params: QueryCommandInput): Promise<QueryCommandOutput>
  create(params: PutCommandInput): Promise<PutCommandOutput>
  updateOne(params: PutCommandInput): Promise<PutCommandOutput>
  deleteOne(params: DeleteCommandInput): Promise<DeleteCommandOutput>
}
