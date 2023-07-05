var config = {
      startOnLoad:true,
      theme: 'base',
      themeVariables: {
        background: '#ffffff',
        primaryColor: '#fff1b2',
        fontSize: '16px',
        noteBkgColor: '#ffffff',
        secondaryColor: '#ffffff',
        lineColor: '#555555'
      },
      flowchart:{
              useMaxWidth:true,
              htmlLabels:false,
              curve: 'monotoneX',
              defaultRenderer: 'dagre'
      }
  };
  mermaid.initialize(config);