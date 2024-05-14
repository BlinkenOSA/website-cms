module.exports = {
  meilisearch: {
    config: {
      "annual-report"	: {
        indexName: "website",
        transformEntry({ entry }) {
          return {
            ...entry,
            id: `annualReport-${entry.id}`,
            type: 'annualReport'
          }
        },
      },
      "collection": {
        indexName: "website",
        transformEntry({ entry }) {
          return {
            ...entry,
            id: `collection-${entry.id}`,
            type: 'collection'
          }
        }
      },
      "entry": {
        indexName: "website",
        transformEntry({ entry }) {
          return {
            ...entry,
            id: `entry-${entry.id}`,
            type: 'entry'
          }
        }
      },
      "event": {
        indexName: "website",
        transformEntry({ entry }) {
          return {
            ...entry,
            id: `event-${entry.id}`,
            type: 'event'
          }
        }
      },
      "fellow": {
        indexName: "website",
        transformEntry({ entry }) {
          return {
            ...entry,
            id: `fellow-${entry.id}`,
            type: 'fellow'
          }
        }
      },
      "job": {
        indexName: "website",
        transformEntry({ entry }) {
          return {
            ...entry,
            id: `job-${entry.id}`,
            type: 'job'
          }
        }
      }, 
      "news-item": {
        indexName: "website",
        transformEntry({ entry }) {
          return {
            ...entry,
            id: `news-${entry.id}`,
            type: 'news'
          }
        }
      },
      "project": {
        indexName: "website",
        transformEntry({ entry }) {
          return {
            ...entry,
            id: `project-${entry.id}`,
            type: 'project'
          }
        }
      },
      "staff-record": {
        indexName: "website",
        transformEntry({ entry }) {
          return {
            ...entry,
            type: 'staff'
          }
        }
      },
      "static-page": {
        indexName: "website",
        transformEntry({ entry }) {
          return {
            ...entry,
            id: `page-${entry.id}`,
            type: 'page'
          }
        }
      }
    }
  },
  'drag-drop-content-types': {
    enabled: true
  }
}