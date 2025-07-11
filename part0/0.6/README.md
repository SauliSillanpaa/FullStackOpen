```mermaid
sequenceDiagram
    participant browser
    participant server

    Note right of browser: The browser creates a new note, rerenders the list, and sends the new note to the server

    browser->>server: POST https://studies.cs.helsinki.fi/exampleapp/new_note_spa
    activate server
    server-->>browser: 201 Created
    deactivate server
```