export default {
  widgets: [
    {
      name: "netlify",
      options: {
        title: "Deployment Status",
        sites: [
          {
            title: "Sanity Backend",
            apiId: "03fa91d8-fe33-40a3-951e-7e8bbe777b46",
            buildHookId: "62b541e8ec71432fca0bb07e",
            name: "salttdb",
          },
          {
            title: "Next Frontend",
            apiId: "1aee3b71-23e9-4c2f-9c2e-595339b1a59e",
            buildHookId: "62b541a508329f309dbb5868",
            name: "saltt",
            url: "https://saltt.cf",
          },
        ],
      },
    },
  ],
};
