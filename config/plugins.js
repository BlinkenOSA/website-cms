module.exports = {
  meilisearch: {
    config: {
      "annual-report"	: {
        indexName: "website",
        transformEntry({ entry }) {
          return {
            ...entry,
            type: 'annualReport'
          }
        },
      },
      "collection": {
        indexName: "website",
        transformEntry({ entry }) {
          return {
            ...entry,
            type: 'collection'
          }
        }
      },
      "entry": {
        indexName: "website",
        transformEntry({ entry }) {
          return {
            ...entry,
            type: 'entry'
          }
        }
      },
      "event": {
        indexName: "website",
        transformEntry({ entry }) {
          return {
            ...entry,
            type: 'event'
          }
        }
      },
      "fellow": {
        indexName: "website",
        transformEntry({ entry }) {
          return {
            ...entry,
            type: 'fellow'
          }
        }
      },
      "job": {
        indexName: "website",
        transformEntry({ entry }) {
          return {
            ...entry,
            type: 'job'
          }
        }
      }, 
      "news-item": {
        indexName: "website",
        transformEntry({ entry }) {
          const transformedEntry = entry
          delete transformedEntry.published_at
          return {
            ...transformedEntry,      
            type: 'news',
            Tags: transformedEntry.Tags.map(tag => tag.name),
          }
        }
      },
      "project": {
        indexName: "website",
        transformEntry({ entry }) {
          return {
            ...entry,
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