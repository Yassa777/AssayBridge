import gql from 'graphql-tag';
export const typeDefs = gql `
  enum QCStatus { PENDING PASS FAIL }
  enum SampleType { SYNTHETIC PATIENT QC_CTRL }

  type DDPCRRun {
    id: ID!
    sampleLabel: String!
    target: String!
    kit: String!
    sampleType: SampleType!
    positives: Int!
    negatives: Int!
    totalDroplets: Int!
    copiesPerUl: Float!
    pass: Boolean!
    runAt: String!
  }

  type Batch {
    id: ID!
    label: String!
    status: QCStatus!
    createdAt: String!
    ddpcrRuns: [DDPCRRun!]!
    summaryMarkdown: String
    summarisedAt: String
  }

  type Query {
    batch(id: ID!): Batch
    batches(limit: Int = 20): [Batch!]!
  }

  type Mutation {
    summariseBatch(batchId: ID!): Batch
  }
`;
