import gql from 'graphql-tag';

export const typeDefs = gql`
  enum QCStatus { PENDING PASS FAIL }
  enum SampleType { SYNTHETIC PATIENT QC_CTRL }

  type DDPCRRun {
    id: id!
    sampleLabel: string!
    target: string!
    kit: string!
    sampleType: sampletype!
    positives: int!
    negatives: int!
    totalDroplets: int!
    copiesPerUl: float!
    pass: boolean!
    runAt: datetime!
  }

  type Batch {
    id: id!
    label: string!
    status: qcstatus!
    createdAt: datetime!
    ddpcrRuns: [ddpcrrun!]!
    summaryMarkdown: string
    summarisedAt: datetime
  }

  type query {
    batch(id: id!): batch
    batches(limit: int = 20): [batch!]!
  }

  type mutation {
    summariseBatch(batchId: id!): batch
  }
`;
