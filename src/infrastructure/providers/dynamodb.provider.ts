import { DynamoDBClient } from '@aws-sdk/client-dynamodb'
import {
  DeleteCommand,
  DeleteCommandInput,
  DeleteCommandOutput,
  DynamoDBDocumentClient,
  GetCommand,
  GetCommandInput,
  GetCommandOutput,
  PutCommand,
  PutCommandInput,
  PutCommandOutput,
  QueryCommand,
  QueryCommandInput,
  QueryCommandOutput
} from '@aws-sdk/lib-dynamodb'
import { IDynamoDBProvider } from '@domain/infrastructure/providers/dynamodb.provider.interface'

export class DynamoDBProvider implements IDynamoDBProvider {
  private client: DynamoDBClient
  private docClient: DynamoDBDocumentClient

  constructor(region) {
    this.client = new DynamoDBClient({ region })
    this.docClient = DynamoDBDocumentClient.from(this.client)
  }

  async getOne(params: GetCommandInput): Promise<GetCommandOutput> {
    const command = new GetCommand(params)
    try {
      const result = await this.docClient.send(command)
      return result
    } catch (error) {
      console.error('Error getting item:', error)
      throw error
    }
  }

  async getMany(params: QueryCommandInput): Promise<QueryCommandOutput> {
    const command = new QueryCommand(params)
    try {
      const result = await this.docClient.send(command)
      return result
    } catch (error) {
      console.error('Error querying items:', error)
      throw error
    }
  }

  async create(params: PutCommandInput): Promise<PutCommandOutput> {
    const command = new PutCommand(params)
    try {
      const result = await this.docClient.send(command)
      return result
    } catch (error) {
      console.error('Error creating item:', error)
      throw error
    }
  }

  async updateOne(params: PutCommandInput): Promise<PutCommandOutput> {
    const command = new PutCommand(params)
    try {
      const result = await this.docClient.send(command)
      return result
    } catch (error) {
      console.error('Error updating item:', error)
      throw error
    }
  }

  async deleteOne(params: DeleteCommandInput): Promise<DeleteCommandOutput> {
    const command = new DeleteCommand(params)
    try {
      const result = await this.docClient.send(command)
      return result
    } catch (error) {
      console.error('Error deleting item:', error)
      throw error
    }
  }
}
