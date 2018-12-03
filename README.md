![Logo of the project](./src/assets/iip_logo.png)

# Widget: Single Event

## Description

The Single Event widget is a React component that pulls and displays a single event from the Content Distribution Platform (CDP) using the CDP public API.

## Configuration

Set the environmental variables in an `.env` file at the root of the project.

The variables used in the app are as follows:
```
REACT_APP_CDP_PUBLIC_API=
REACT_APP_CDP_MODULES_URL=
```

REACT_APP_CDP_PUBLIC_API identifies the URL of the API fom which content will be pulled (allows for the use of multiple environments - i.e. dev, stage, prod).

REACT_APP_CDP_MODULES_URL indentifies the URL of the S3 bucket in which the build will be saved. (Again, to allow for multiple environments).

## Usage
In order to pull in the correct article and display it, and embed requires the following configurations:

| Option   | Description                                      |
| -------- | ------------------------------------------------ |
| selector | DOM element that component will attach itself to |
| sites    | Elastic search index to pull the event from      |
| ids      | The post ID of the selected event                |

For example:

```
CDP.widgets.Event.new( {
  selector: '#cdp-event-embed',
  sites: 'share.america.gov',
  ids: '615621'
} ).render();
```

The event embed JS and CSS file should also be pulled before the event embed widget is initialized. A [loader file](./src/cdp-module-loader.js) is included which does all this.