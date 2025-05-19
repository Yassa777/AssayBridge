import { gql } from '@apollo/client';

export const GET_BATCH = gql`
  query GetBatch($id: ID!) {
    batch(id: $id) {
      id
      label
      status
      createdAt
      summaryMarkdown
      summarisedAt
      ddpcrRuns {
        id
        sampleLabel
        target
        kit
        sampleType
        positives
        negatives
        totalDroplets
        copiesPerUl
        pass
        runAt
      }
    }
  }
`;

export const SUMMARISE_BATCH = gql`
  mutation SummariseBatch($batchId: ID!) {
    summariseBatch(batchId: $batchId) {
      id
      label
      summaryMarkdown
      summarisedAt
    }
  }
`;

export const GET_BATCHES = gql`
  query GetBatches($limit: Int) {
    batches(limit: $limit) {
      id
      label
      createdAt # Optional: for sorting or display
      status # Optional: for display
    }
  }
`; 