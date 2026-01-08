# Reference
## Comments
<details><summary><code>client.comments.<a href="/src/api/resources/comments/client/Client.ts">list</a>({ ...params }) -> IcePanel.CommentsListResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comments.list({
    landscapeId: "landscapeId",
    versionId: "versionId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.CommentsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CommentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.comments.<a href="/src/api/resources/comments/client/Client.ts">create</a>({ ...params }) -> IcePanel.CommentsCreateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comments.create({
    landscapeId: "landscapeId",
    versionId: "versionId",
    body: {
        body: {
            content: "content",
            status: "open",
            type: "question"
        }
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.CommentCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CommentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.comments.<a href="/src/api/resources/comments/client/Client.ts">get</a>({ ...params }) -> IcePanel.CommentsGetResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comments.get({
    landscapeId: "landscapeId",
    versionId: "versionId",
    commentId: "commentId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.CommentFindRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CommentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.comments.<a href="/src/api/resources/comments/client/Client.ts">upsert</a>({ ...params }) -> IcePanel.CommentsUpsertResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comments.upsert({
    landscapeId: "landscapeId",
    versionId: "versionId",
    commentId: "commentId",
    body: {
        content: "content",
        status: "open",
        type: "question"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.CommentUpsertRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CommentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.comments.<a href="/src/api/resources/comments/client/Client.ts">delete</a>({ ...params }) -> IcePanel.CommentsDeleteResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comments.delete({
    landscapeId: "landscapeId",
    versionId: "versionId",
    commentId: "commentId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.CommentDeleteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CommentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.comments.<a href="/src/api/resources/comments/client/Client.ts">update</a>({ ...params }) -> IcePanel.CommentsUpdateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comments.update({
    landscapeId: "landscapeId",
    versionId: "versionId",
    commentId: "commentId",
    body: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.CommentUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `CommentsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Diagrams
<details><summary><code>client.diagrams.<a href="/src/api/resources/diagrams/client/Client.ts">list</a>({ ...params }) -> IcePanel.DiagramsListResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.diagrams.list({
    landscapeId: "landscapeId",
    versionId: "versionId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DiagramsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DiagramsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.diagrams.<a href="/src/api/resources/diagrams/client/Client.ts">create</a>({ ...params }) -> IcePanel.DiagramsCreateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.diagrams.create({
    landscapeId: "landscapeId",
    versionId: "versionId",
    index: 1.1,
    modelId: "modelId",
    name: "name",
    type: "app-diagram"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DiagramCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DiagramsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.diagrams.<a href="/src/api/resources/diagrams/client/Client.ts">get</a>({ ...params }) -> IcePanel.DiagramsGetResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.diagrams.get({
    landscapeId: "landscapeId",
    versionId: "versionId",
    diagramId: "diagramId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DiagramFindRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DiagramsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.diagrams.<a href="/src/api/resources/diagrams/client/Client.ts">upsert</a>({ ...params }) -> IcePanel.DiagramsUpsertResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.diagrams.upsert({
    landscapeId: "landscapeId",
    versionId: "versionId",
    diagramId: "diagramId",
    index: 1.1,
    modelId: "modelId",
    name: "name",
    type: "app-diagram"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DiagramUpsertRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DiagramsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.diagrams.<a href="/src/api/resources/diagrams/client/Client.ts">delete</a>({ ...params }) -> IcePanel.DiagramsDeleteResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.diagrams.delete({
    landscapeId: "landscapeId",
    versionId: "versionId",
    diagramId: "diagramId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DiagramDeleteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DiagramsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.diagrams.<a href="/src/api/resources/diagrams/client/Client.ts">update</a>({ ...params }) -> IcePanel.DiagramsUpdateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.diagrams.update({
    landscapeId: "landscapeId",
    versionId: "versionId",
    diagramId: "diagramId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DiagramUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DiagramsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.diagrams.<a href="/src/api/resources/diagrams/client/Client.ts">exists</a>({ ...params }) -> Headers</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.diagrams.exists({
    landscapeId: "landscapeId",
    versionId: "versionId",
    diagramId: "diagramId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DiagramExistsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DiagramsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.diagrams.<a href="/src/api/resources/diagrams/client/Client.ts">listThumbnails</a>({ ...params }) -> IcePanel.DiagramsListThumbnailsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.diagrams.listThumbnails({
    landscapeId: "landscapeId",
    versionId: "versionId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DiagramThumbnailsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DiagramsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.diagrams.<a href="/src/api/resources/diagrams/client/Client.ts">getThumbnail</a>({ ...params }) -> IcePanel.DiagramsGetThumbnailResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.diagrams.getThumbnail({
    landscapeId: "landscapeId",
    versionId: "versionId",
    diagramId: "diagramId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DiagramThumbnailGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DiagramsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Domains
<details><summary><code>client.domains.<a href="/src/api/resources/domains/client/Client.ts">list</a>({ ...params }) -> IcePanel.DomainsListResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.domains.list({
    landscapeId: "landscapeId",
    versionId: "versionId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DomainsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DomainsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.domains.<a href="/src/api/resources/domains/client/Client.ts">create</a>({ ...params }) -> IcePanel.DomainsCreateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.domains.create({
    landscapeId: "landscapeId",
    versionId: "versionId",
    body: {
        name: "name"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DomainCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DomainsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.domains.<a href="/src/api/resources/domains/client/Client.ts">get</a>({ ...params }) -> IcePanel.DomainsGetResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.domains.get({
    landscapeId: "landscapeId",
    versionId: "versionId",
    domainId: "domainId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DomainFindRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DomainsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.domains.<a href="/src/api/resources/domains/client/Client.ts">upsert</a>({ ...params }) -> IcePanel.DomainsUpsertResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.domains.upsert({
    landscapeId: "landscapeId",
    versionId: "versionId",
    domainId: "domainId",
    name: "name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DomainUpsertRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DomainsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.domains.<a href="/src/api/resources/domains/client/Client.ts">delete</a>({ ...params }) -> IcePanel.DomainsDeleteResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.domains.delete({
    landscapeId: "landscapeId",
    versionId: "versionId",
    domainId: "domainId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DomainDeleteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DomainsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.domains.<a href="/src/api/resources/domains/client/Client.ts">update</a>({ ...params }) -> IcePanel.DomainsUpdateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.domains.update({
    landscapeId: "landscapeId",
    versionId: "versionId",
    domainId: "domainId",
    body: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DomainUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DomainsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.domains.<a href="/src/api/resources/domains/client/Client.ts">exists</a>({ ...params }) -> Headers</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.domains.exists({
    landscapeId: "landscapeId",
    versionId: "versionId",
    domainId: "domainId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DomainExistsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DomainsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Drafts
<details><summary><code>client.drafts.<a href="/src/api/resources/drafts/client/Client.ts">list</a>({ ...params }) -> IcePanel.DraftsListResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.drafts.list({
    landscapeId: "landscapeId",
    versionId: "versionId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DraftsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DraftsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.drafts.<a href="/src/api/resources/drafts/client/Client.ts">create</a>({ ...params }) -> IcePanel.DraftsCreateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.drafts.create({
    landscapeId: "landscapeId",
    versionId: "versionId",
    body: {
        name: "name",
        status: "in-progress"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DraftCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DraftsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.drafts.<a href="/src/api/resources/drafts/client/Client.ts">get</a>({ ...params }) -> IcePanel.DraftsGetResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.drafts.get({
    landscapeId: "landscapeId",
    versionId: "versionId",
    draftId: "draftId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DraftFindRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DraftsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.drafts.<a href="/src/api/resources/drafts/client/Client.ts">upsert</a>({ ...params }) -> IcePanel.DraftsUpsertResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.drafts.upsert({
    landscapeId: "landscapeId",
    versionId: "versionId",
    draftId: "draftId",
    body: {
        name: "name",
        status: "in-progress"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DraftUpsertRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DraftsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.drafts.<a href="/src/api/resources/drafts/client/Client.ts">delete</a>({ ...params }) -> Record<string, unknown></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.drafts.delete({
    landscapeId: "landscapeId",
    versionId: "versionId",
    draftId: "draftId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DraftDeleteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DraftsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.drafts.<a href="/src/api/resources/drafts/client/Client.ts">update</a>({ ...params }) -> IcePanel.DraftsUpdateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.drafts.update({
    landscapeId: "landscapeId",
    versionId: "versionId",
    draftId: "draftId",
    body: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DraftUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DraftsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.drafts.<a href="/src/api/resources/drafts/client/Client.ts">merge</a>({ ...params }) -> IcePanel.DraftsMergeResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.drafts.merge({
    landscapeId: "landscapeId",
    versionId: "versionId",
    draftId: "draftId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DraftMergeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `DraftsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Flows
<details><summary><code>client.flows.<a href="/src/api/resources/flows/client/Client.ts">list</a>({ ...params }) -> IcePanel.FlowsListResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.flows.list({
    landscapeId: "landscapeId",
    versionId: "versionId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.FlowsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FlowsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.flows.<a href="/src/api/resources/flows/client/Client.ts">create</a>({ ...params }) -> IcePanel.FlowsCreateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.flows.create({
    landscapeId: "landscapeId",
    versionId: "versionId",
    body: {
        name: "name",
        diagramId: "diagramId"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.FlowCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FlowsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.flows.<a href="/src/api/resources/flows/client/Client.ts">get</a>({ ...params }) -> IcePanel.FlowsGetResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.flows.get({
    landscapeId: "landscapeId",
    versionId: "versionId",
    flowId: "flowId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.FlowFindRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FlowsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.flows.<a href="/src/api/resources/flows/client/Client.ts">upsert</a>({ ...params }) -> IcePanel.FlowsUpsertResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.flows.upsert({
    landscapeId: "landscapeId",
    versionId: "versionId",
    flowId: "flowId",
    body: {
        name: "name",
        diagramId: "diagramId"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.FlowUpsertRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FlowsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.flows.<a href="/src/api/resources/flows/client/Client.ts">delete</a>({ ...params }) -> IcePanel.FlowsDeleteResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.flows.delete({
    landscapeId: "landscapeId",
    versionId: "versionId",
    flowId: "flowId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.FlowDeleteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FlowsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.flows.<a href="/src/api/resources/flows/client/Client.ts">update</a>({ ...params }) -> IcePanel.FlowsUpdateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.flows.update({
    landscapeId: "landscapeId",
    versionId: "versionId",
    flowId: "flowId",
    body: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.FlowUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FlowsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.flows.<a href="/src/api/resources/flows/client/Client.ts">exists</a>({ ...params }) -> Headers</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.flows.exists({
    landscapeId: "landscapeId",
    versionId: "versionId",
    flowId: "flowId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.FlowExistsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FlowsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.flows.<a href="/src/api/resources/flows/client/Client.ts">listThumbnails</a>({ ...params }) -> IcePanel.FlowsListThumbnailsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.flows.listThumbnails({
    landscapeId: "landscapeId",
    versionId: "versionId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.FlowThumbnailsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FlowsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.flows.<a href="/src/api/resources/flows/client/Client.ts">getThumbnail</a>({ ...params }) -> IcePanel.FlowsGetThumbnailResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.flows.getThumbnail({
    landscapeId: "landscapeId",
    versionId: "versionId",
    flowId: "flowId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.FlowThumbnailGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `FlowsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Landscapes
<details><summary><code>client.landscapes.<a href="/src/api/resources/landscapes/client/Client.ts">get</a>({ ...params }) -> IcePanel.LandscapesGetResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.landscapes.get({
    landscapeId: "landscapeId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.LandscapeFindRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LandscapesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.landscapes.<a href="/src/api/resources/landscapes/client/Client.ts">delete</a>({ ...params }) -> Record<string, unknown></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.landscapes.delete({
    landscapeId: "landscapeId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.LandscapeDeleteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LandscapesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.landscapes.<a href="/src/api/resources/landscapes/client/Client.ts">update</a>({ ...params }) -> IcePanel.LandscapesUpdateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.landscapes.update({
    landscapeId: "landscapeId",
    body: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.LandscapeUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LandscapesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.landscapes.<a href="/src/api/resources/landscapes/client/Client.ts">duplicate</a>({ ...params }) -> IcePanel.LandscapesDuplicateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.landscapes.duplicate({
    landscapeId: "landscapeId",
    body: {
        name: "name"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.LandscapeDuplicateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LandscapesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.landscapes.<a href="/src/api/resources/landscapes/client/Client.ts">copy</a>({ ...params }) -> Record<string, unknown></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.landscapes.copy({
    landscapeId: "landscapeId",
    targetLandscapeId: "targetLandscapeId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.LandscapeCopyRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LandscapesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.landscapes.<a href="/src/api/resources/landscapes/client/Client.ts">search</a>({ ...params }) -> IcePanel.LandscapesSearchResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Search the entire landscape
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.landscapes.search({
    landscapeId: "landscapeId",
    versionId: "versionId",
    search: "search"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.LandscapeSearchRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LandscapesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Organizations
<details><summary><code>client.organizations.<a href="/src/api/resources/organizations/client/Client.ts">list</a>({ ...params }) -> IcePanel.OrganizationsListResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.OrganizationsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrganizationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.organizations.<a href="/src/api/resources/organizations/client/Client.ts">create</a>({ ...params }) -> IcePanel.OrganizationsCreateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.create({
    name: "name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.OrganizationRequired` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrganizationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.organizations.<a href="/src/api/resources/organizations/client/Client.ts">get</a>({ ...params }) -> IcePanel.OrganizationsGetResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.get({
    organizationId: "organizationId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.OrganizationFindRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrganizationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.organizations.<a href="/src/api/resources/organizations/client/Client.ts">delete</a>({ ...params }) -> Record<string, unknown></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.delete({
    organizationId: "organizationId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.OrganizationDeleteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrganizationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.organizations.<a href="/src/api/resources/organizations/client/Client.ts">update</a>({ ...params }) -> IcePanel.OrganizationsUpdateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.update({
    organizationId: "organizationId",
    body: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.OrganizationUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `OrganizationsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## ShareLink
<details><summary><code>client.shareLink.<a href="/src/api/resources/shareLink/client/Client.ts">get</a>({ ...params }) -> IcePanel.ShareLinkGetResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.shareLink.get({
    landscapeId: "landscapeId",
    versionId: "versionId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.ShareLinkFindRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ShareLinkClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.shareLink.<a href="/src/api/resources/shareLink/client/Client.ts">create</a>({ ...params }) -> IcePanel.ShareLinkCreateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.shareLink.create({
    landscapeId: "landscapeId",
    versionId: "versionId",
    body: {
        "protected": true
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.ShareLinkCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ShareLinkClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.shareLink.<a href="/src/api/resources/shareLink/client/Client.ts">delete</a>({ ...params }) -> Record<string, unknown></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.shareLink.delete({
    landscapeId: "landscapeId",
    versionId: "versionId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.ShareLinkDeleteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ShareLinkClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.shareLink.<a href="/src/api/resources/shareLink/client/Client.ts">update</a>({ ...params }) -> IcePanel.ShareLinkUpdateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.shareLink.update({
    landscapeId: "landscapeId",
    versionId: "versionId",
    body: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.ShareLinkUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ShareLinkClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Tags
<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">list</a>({ ...params }) -> IcePanel.TagsListResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.list({
    landscapeId: "landscapeId",
    versionId: "versionId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.TagsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">create</a>({ ...params }) -> IcePanel.TagsCreateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.create({
    landscapeId: "landscapeId",
    versionId: "versionId",
    body: {
        color: "blue",
        groupId: "groupId",
        index: 1.1,
        name: "name"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.TagCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">get</a>({ ...params }) -> IcePanel.TagsGetResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.get({
    landscapeId: "landscapeId",
    versionId: "versionId",
    tagId: "tagId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.TagFindRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">upsert</a>({ ...params }) -> IcePanel.TagsUpsertResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.upsert({
    landscapeId: "landscapeId",
    versionId: "versionId",
    tagId: "tagId",
    color: "blue",
    groupId: "groupId",
    index: 1.1,
    name: "name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.TagUpsertRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">delete</a>({ ...params }) -> IcePanel.TagsDeleteResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.delete({
    landscapeId: "landscapeId",
    versionId: "versionId",
    tagId: "tagId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.TagDeleteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.<a href="/src/api/resources/tags/client/Client.ts">update</a>({ ...params }) -> IcePanel.TagsUpdateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.update({
    landscapeId: "landscapeId",
    versionId: "versionId",
    tagId: "tagId",
    body: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.TagUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TagsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Teams
<details><summary><code>client.teams.<a href="/src/api/resources/teams/client/Client.ts">list</a>({ ...params }) -> IcePanel.TeamsListResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.teams.list({
    organizationId: "organizationId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.TeamsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.teams.<a href="/src/api/resources/teams/client/Client.ts">create</a>({ ...params }) -> IcePanel.TeamsCreateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.teams.create({
    organizationId: "organizationId",
    body: {
        name: "name"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.TeamCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.teams.<a href="/src/api/resources/teams/client/Client.ts">get</a>({ ...params }) -> IcePanel.TeamsGetResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.teams.get({
    organizationId: "organizationId",
    teamId: "teamId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.TeamFindRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.teams.<a href="/src/api/resources/teams/client/Client.ts">delete</a>({ ...params }) -> Record<string, unknown></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.teams.delete({
    organizationId: "organizationId",
    teamId: "teamId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.TeamDeleteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.teams.<a href="/src/api/resources/teams/client/Client.ts">update</a>({ ...params }) -> IcePanel.TeamsUpdateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.teams.update({
    organizationId: "organizationId",
    teamId: "teamId",
    body: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.TeamUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.teams.<a href="/src/api/resources/teams/client/Client.ts">listLandscapes</a>({ ...params }) -> IcePanel.TeamsListLandscapesResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.teams.listLandscapes({
    organizationId: "organizationId",
    teamId: "teamId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.TeamLandscapesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.teams.<a href="/src/api/resources/teams/client/Client.ts">listModelObjects</a>({ ...params }) -> IcePanel.TeamsListModelObjectsResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.teams.listModelObjects({
    organizationId: "organizationId",
    teamId: "teamId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.TeamModelObjectsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TeamsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Versions
<details><summary><code>client.versions.<a href="/src/api/resources/versions/client/Client.ts">list</a>({ ...params }) -> IcePanel.VersionsListResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.versions.list({
    landscapeId: "landscapeId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.VersionsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.versions.<a href="/src/api/resources/versions/client/Client.ts">create</a>({ ...params }) -> IcePanel.VersionsCreateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.versions.create({
    landscapeId: "landscapeId",
    body: {
        name: "name",
        notes: "notes"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.VersionCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.versions.<a href="/src/api/resources/versions/client/Client.ts">get</a>({ ...params }) -> IcePanel.VersionsGetResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.versions.get({
    landscapeId: "landscapeId",
    versionId: "versionId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.VersionFindRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.versions.<a href="/src/api/resources/versions/client/Client.ts">delete</a>({ ...params }) -> unknown</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.versions.delete({
    landscapeId: "landscapeId",
    versionId: "versionId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.VersionDeleteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.versions.<a href="/src/api/resources/versions/client/Client.ts">update</a>({ ...params }) -> IcePanel.VersionsUpdateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.versions.update({
    landscapeId: "landscapeId",
    versionId: "versionId",
    body: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.VersionUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `VersionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Catalog Technologies
<details><summary><code>client.catalog.technologies.<a href="/src/api/resources/catalog/resources/technologies/client/Client.ts">list</a>({ ...params }) -> IcePanel.TechnologiesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List technologies
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.catalog.technologies.list();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.CatalogTechnologiesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TechnologiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.catalog.technologies.<a href="/src/api/resources/catalog/resources/technologies/client/Client.ts">suggestInformation</a>({ ...params }) -> IcePanel.TechnologiesSuggestInformationResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generate suggestions for a technologies information
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.catalog.technologies.suggestInformation({
    url: "url"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.CatalogSuggestionInformationGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TechnologiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.catalog.technologies.<a href="/src/api/resources/catalog/resources/technologies/client/Client.ts">suggestBrand</a>({ ...params }) -> IcePanel.TechnologiesSuggestBrandResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Generate suggestions for a technologies branding
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.catalog.technologies.suggestBrand({
    url: "url"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.CatalogSuggestionBrandGetRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TechnologiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.catalog.technologies.<a href="/src/api/resources/catalog/resources/technologies/client/Client.ts">createSignedIconUrl</a>() -> IcePanel.TechnologiesCreateSignedIconUrlResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a signed URL prefix with access to all catalog icons
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.catalog.technologies.createSignedIconUrl();

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**requestOptions:** `TechnologiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.catalog.technologies.<a href="/src/api/resources/catalog/resources/technologies/client/Client.ts">get</a>({ ...params }) -> IcePanel.TechnologiesGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Find a technology
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.catalog.technologies.get({
    catalogTechnologyId: "catalogTechnologyId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.CatalogTechnologyFindRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TechnologiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.catalog.technologies.<a href="/src/api/resources/catalog/resources/technologies/client/Client.ts">getSlug</a>({ ...params }) -> IcePanel.TechnologiesGetSlugResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Find a technology by the slug
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.catalog.technologies.getSlug({
    catalogTechnologySlug: "catalogTechnologySlug"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.CatalogTechnologySlugFindRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TechnologiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Comments Replies
<details><summary><code>client.comments.replies.<a href="/src/api/resources/comments/resources/replies/client/Client.ts">list</a>({ ...params }) -> IcePanel.RepliesListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List comment replies
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comments.replies.list({
    landscapeId: "landscapeId",
    versionId: "versionId",
    commentId: "commentId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.CommentRepliesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RepliesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.comments.replies.<a href="/src/api/resources/comments/resources/replies/client/Client.ts">create</a>({ ...params }) -> IcePanel.RepliesCreateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Create a comment reply
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comments.replies.create({
    landscapeId: "landscapeId",
    versionId: "versionId",
    commentId: "commentId",
    body: {
        content: "content"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.CommentReplyCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RepliesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.comments.replies.<a href="/src/api/resources/comments/resources/replies/client/Client.ts">get</a>({ ...params }) -> IcePanel.RepliesGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Find a comment reply
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comments.replies.get({
    landscapeId: "landscapeId",
    versionId: "versionId",
    commentId: "commentId",
    commentReplyId: "commentReplyId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.CommentReplyFindRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RepliesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.comments.replies.<a href="/src/api/resources/comments/resources/replies/client/Client.ts">upsert</a>({ ...params }) -> IcePanel.RepliesUpsertResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comments.replies.upsert({
    landscapeId: "landscapeId",
    versionId: "versionId",
    commentId: "commentId",
    commentReplyId: "commentReplyId",
    content: "content"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.CommentReplyUpsertRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RepliesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.comments.replies.<a href="/src/api/resources/comments/resources/replies/client/Client.ts">delete</a>({ ...params }) -> Record<string, unknown></code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Delete a comment reply
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comments.replies.delete({
    landscapeId: "landscapeId",
    versionId: "versionId",
    commentId: "commentId",
    commentReplyId: "commentReplyId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.CommentReplyDeleteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RepliesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.comments.replies.<a href="/src/api/resources/comments/resources/replies/client/Client.ts">update</a>({ ...params }) -> IcePanel.RepliesUpdateResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Update a comment reply
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.comments.replies.update({
    landscapeId: "landscapeId",
    versionId: "versionId",
    commentId: "commentId",
    commentReplyId: "commentReplyId",
    body: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.CommentReplyUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RepliesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Diagrams Content
<details><summary><code>client.diagrams.content.<a href="/src/api/resources/diagrams/resources/content/client/Client.ts">get</a>({ ...params }) -> IcePanel.ContentGetResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.diagrams.content.get({
    landscapeId: "landscapeId",
    versionId: "versionId",
    diagramId: "diagramId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DiagramContentFindRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.diagrams.content.<a href="/src/api/resources/diagrams/resources/content/client/Client.ts">replace</a>({ ...params }) -> IcePanel.ContentReplaceResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.diagrams.content.replace({
    landscapeId: "landscapeId",
    versionId: "versionId",
    diagramId: "diagramId",
    body: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DiagramContentReplaceRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.diagrams.content.<a href="/src/api/resources/diagrams/resources/content/client/Client.ts">update</a>({ ...params }) -> IcePanel.ContentUpdateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.diagrams.content.update({
    landscapeId: "landscapeId",
    versionId: "versionId",
    diagramId: "diagramId",
    body: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DiagramContentUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ContentClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Diagrams Groups
<details><summary><code>client.diagrams.groups.<a href="/src/api/resources/diagrams/resources/groups/client/Client.ts">list</a>({ ...params }) -> IcePanel.GroupsListResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.diagrams.groups.list({
    landscapeId: "landscapeId",
    versionId: "versionId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DiagramGroupsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.diagrams.groups.<a href="/src/api/resources/diagrams/resources/groups/client/Client.ts">create</a>({ ...params }) -> IcePanel.GroupsCreateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.diagrams.groups.create({
    landscapeId: "landscapeId",
    versionId: "versionId",
    body: {
        modelId: "modelId",
        name: "name"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DiagramGroupCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.diagrams.groups.<a href="/src/api/resources/diagrams/resources/groups/client/Client.ts">get</a>({ ...params }) -> IcePanel.GroupsGetResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.diagrams.groups.get({
    landscapeId: "landscapeId",
    versionId: "versionId",
    diagramGroupId: "diagramGroupId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DiagramGroupFindRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.diagrams.groups.<a href="/src/api/resources/diagrams/resources/groups/client/Client.ts">upsert</a>({ ...params }) -> IcePanel.GroupsUpsertResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.diagrams.groups.upsert({
    landscapeId: "landscapeId",
    versionId: "versionId",
    diagramGroupId: "diagramGroupId",
    modelId: "modelId",
    name: "name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DiagramGroupUpsertRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.diagrams.groups.<a href="/src/api/resources/diagrams/resources/groups/client/Client.ts">delete</a>({ ...params }) -> IcePanel.GroupsDeleteResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.diagrams.groups.delete({
    landscapeId: "landscapeId",
    versionId: "versionId",
    diagramGroupId: "diagramGroupId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DiagramGroupDeleteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.diagrams.groups.<a href="/src/api/resources/diagrams/resources/groups/client/Client.ts">update</a>({ ...params }) -> IcePanel.GroupsUpdateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.diagrams.groups.update({
    landscapeId: "landscapeId",
    versionId: "versionId",
    diagramGroupId: "diagramGroupId",
    body: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DiagramGroupUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.diagrams.groups.<a href="/src/api/resources/diagrams/resources/groups/client/Client.ts">exists</a>({ ...params }) -> Headers</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.diagrams.groups.exists({
    landscapeId: "landscapeId",
    versionId: "versionId",
    diagramGroupId: "diagramGroupId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DiagramGroupExistsRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Diagrams Export
<details><summary><code>client.diagrams.export.<a href="/src/api/resources/diagrams/resources/export/client/Client.ts">get</a>({ ...params }) -> IcePanel.ExportGetResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.diagrams.export.get({
    landscapeId: "landscapeId",
    versionId: "versionId",
    diagramId: "diagramId",
    diagramExportImageId: "diagramExportImageId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DiagramExportImageFindRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.diagrams.export.<a href="/src/api/resources/diagrams/resources/export/client/Client.ts">create</a>({ ...params }) -> IcePanel.ExportCreateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.diagrams.export.create({
    landscapeId: "landscapeId",
    versionId: "versionId",
    diagramId: "diagramId",
    body: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.DiagramExportImageCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Flows Export
<details><summary><code>client.flows.export.<a href="/src/api/resources/flows/resources/export/client/Client.ts">text</a>({ ...params }) -> string</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.flows.export.text({
    landscapeId: "landscapeId",
    versionId: "versionId",
    flowId: "flowId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.FlowExportTextRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.flows.export.<a href="/src/api/resources/flows/resources/export/client/Client.ts">code</a>({ ...params }) -> string</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.flows.export.code({
    landscapeId: "landscapeId",
    versionId: "versionId",
    flowId: "flowId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.FlowExportCodeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.flows.export.<a href="/src/api/resources/flows/resources/export/client/Client.ts">mermaid</a>({ ...params }) -> string</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.flows.export.mermaid({
    landscapeId: "landscapeId",
    versionId: "versionId",
    flowId: "flowId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.FlowExportMermaidRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Landscapes Logs
<details><summary><code>client.landscapes.logs.<a href="/src/api/resources/landscapes/resources/logs/client/Client.ts">list</a>({ ...params }) -> IcePanel.LogsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List action logs
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.landscapes.logs.list({
    landscapeId: "landscapeId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.ActionLogsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LogsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.landscapes.logs.<a href="/src/api/resources/landscapes/resources/logs/client/Client.ts">get</a>({ ...params }) -> IcePanel.LogsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Find an action log
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.landscapes.logs.get({
    landscapeId: "landscapeId",
    actionLogId: "actionLogId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.ActionLogFindRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LogsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.landscapes.logs.<a href="/src/api/resources/landscapes/resources/logs/client/Client.ts">listChildren</a>({ ...params }) -> IcePanel.LogsListChildrenResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List actions that happened as a result of a different action
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.landscapes.logs.listChildren({
    landscapeId: "landscapeId",
    actionLogId: "actionLogId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.ActionLogChildrenListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LogsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Landscapes Export
<details><summary><code>client.landscapes.export.<a href="/src/api/resources/landscapes/resources/export/client/Client.ts">create</a>({ ...params }) -> IcePanel.ExportCreateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.landscapes.export.create({
    landscapeId: "landscapeId",
    versionId: "versionId",
    type: "pdf",
    body: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.LandscapeExportRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.landscapes.export.<a href="/src/api/resources/landscapes/resources/export/client/Client.ts">get</a>({ ...params }) -> IcePanel.ExportGetResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.landscapes.export.get({
    landscapeId: "landscapeId",
    versionId: "versionId",
    landscapeExportId: "landscapeExportId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.LandscapeExportFindRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Landscapes Logs Stats
<details><summary><code>client.landscapes.logs.stats.<a href="/src/api/resources/landscapes/resources/logs/resources/stats/client/Client.ts">byType</a>({ ...params }) -> IcePanel.ActionLogStatsListByType</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List total counts of actions for each action type (e.g. diagram-content-update, model-object-create)
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.landscapes.logs.stats.byType({
    landscapeId: "landscapeId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.ActionLogStatsByTypeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StatsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.landscapes.logs.stats.<a href="/src/api/resources/landscapes/resources/logs/resources/stats/client/Client.ts">byEntity</a>({ ...params }) -> IcePanel.ActionLogStatsListByEntity</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List total counts of actions for each entity identifier
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.landscapes.logs.stats.byEntity({
    landscapeId: "landscapeId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.ActionLogStatsByEntityRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StatsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Model Connections
<details><summary><code>client.model.connections.<a href="/src/api/resources/model/resources/connections/client/Client.ts">list</a>({ ...params }) -> IcePanel.ConnectionsListResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.model.connections.list({
    landscapeId: "landscapeId",
    versionId: "versionId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.ModelConnectionsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConnectionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.model.connections.<a href="/src/api/resources/model/resources/connections/client/Client.ts">create</a>({ ...params }) -> IcePanel.ConnectionsCreateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.model.connections.create({
    landscapeId: "landscapeId",
    versionId: "versionId",
    body: {
        name: "name",
        originId: "originId",
        targetId: "targetId"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.ModelConnectionCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConnectionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.model.connections.<a href="/src/api/resources/model/resources/connections/client/Client.ts">get</a>({ ...params }) -> IcePanel.ConnectionsGetResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.model.connections.get({
    landscapeId: "landscapeId",
    versionId: "versionId",
    modelConnectionId: "modelConnectionId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.ModelConnectionFindRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConnectionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.model.connections.<a href="/src/api/resources/model/resources/connections/client/Client.ts">upsert</a>({ ...params }) -> IcePanel.ConnectionsUpsertResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.model.connections.upsert({
    landscapeId: "landscapeId",
    versionId: "versionId",
    modelConnectionId: "modelConnectionId",
    name: "name",
    originId: "originId",
    targetId: "targetId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.ModelConnectionUpsertRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConnectionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.model.connections.<a href="/src/api/resources/model/resources/connections/client/Client.ts">delete</a>({ ...params }) -> IcePanel.ConnectionsDeleteResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.model.connections.delete({
    landscapeId: "landscapeId",
    versionId: "versionId",
    modelConnectionId: "modelConnectionId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.ModelConnectionDeleteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConnectionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.model.connections.<a href="/src/api/resources/model/resources/connections/client/Client.ts">update</a>({ ...params }) -> IcePanel.ConnectionsUpdateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.model.connections.update({
    landscapeId: "landscapeId",
    versionId: "versionId",
    modelConnectionId: "modelConnectionId",
    body: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.ModelConnectionUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ConnectionsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Model Objects
<details><summary><code>client.model.objects.<a href="/src/api/resources/model/resources/objects/client/Client.ts">list</a>({ ...params }) -> IcePanel.ObjectsListResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.model.objects.list({
    landscapeId: "landscapeId",
    versionId: "versionId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.ModelObjectsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ObjectsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.model.objects.<a href="/src/api/resources/model/resources/objects/client/Client.ts">create</a>({ ...params }) -> IcePanel.ObjectsCreateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.model.objects.create({
    landscapeId: "landscapeId",
    versionId: "versionId",
    body: {
        name: "name",
        type: "actor"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.ModelObjectCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ObjectsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.model.objects.<a href="/src/api/resources/model/resources/objects/client/Client.ts">get</a>({ ...params }) -> IcePanel.ObjectsGetResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.model.objects.get({
    landscapeId: "landscapeId",
    versionId: "versionId",
    modelObjectId: "modelObjectId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.ModelObjectFindRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ObjectsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.model.objects.<a href="/src/api/resources/model/resources/objects/client/Client.ts">upsert</a>({ ...params }) -> IcePanel.ObjectsUpsertResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.model.objects.upsert({
    landscapeId: "landscapeId",
    versionId: "versionId",
    modelObjectId: "modelObjectId",
    name: "name",
    type: "actor"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.ModelObjectUpsertRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ObjectsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.model.objects.<a href="/src/api/resources/model/resources/objects/client/Client.ts">delete</a>({ ...params }) -> IcePanel.ObjectsDeleteResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.model.objects.delete({
    landscapeId: "landscapeId",
    versionId: "versionId",
    modelObjectId: "modelObjectId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.ModelObjectDeleteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ObjectsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.model.objects.<a href="/src/api/resources/model/resources/objects/client/Client.ts">update</a>({ ...params }) -> IcePanel.ObjectsUpdateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.model.objects.update({
    landscapeId: "landscapeId",
    versionId: "versionId",
    modelObjectId: "modelObjectId",
    body: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.ModelObjectUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ObjectsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Model Connections Export
<details><summary><code>client.model.connections.export.<a href="/src/api/resources/model/resources/connections/resources/export/client/Client.ts">csv</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.model.connections.export.csv({
    landscapeId: "landscapeId",
    versionId: "versionId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.ModelConnectionsExportCsvRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Model Objects Export
<details><summary><code>client.model.objects.export.<a href="/src/api/resources/model/resources/objects/resources/export/client/Client.ts">dependenciesJson</a>({ ...params }) -> IcePanel.ModelObjectDependenciesExport</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export object dependencies as JSON
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.model.objects.export.dependenciesJson({
    landscapeId: "landscapeId",
    versionId: "versionId",
    modelObjectId: "modelObjectId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.ModelObjectDependenciesExportJsonRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.model.objects.export.<a href="/src/api/resources/model/resources/objects/resources/export/client/Client.ts">csv</a>({ ...params }) -> void</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Export all model objects as CSV
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.model.objects.export.csv({
    landscapeId: "landscapeId",
    versionId: "versionId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.ModelObjectsExportCsvRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `ExportClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Organizations Landscapes
<details><summary><code>client.organizations.landscapes.<a href="/src/api/resources/organizations/resources/landscapes/client/Client.ts">list</a>({ ...params }) -> IcePanel.LandscapesListResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.landscapes.list({
    organizationId: "organizationId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.OrganizationLandscapesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LandscapesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.organizations.landscapes.<a href="/src/api/resources/organizations/resources/landscapes/client/Client.ts">create</a>({ ...params }) -> IcePanel.LandscapesCreateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.landscapes.create({
    organizationId: "organizationId",
    name: "name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.OrganizationLandscapeCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LandscapesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Organizations Logs
<details><summary><code>client.organizations.logs.<a href="/src/api/resources/organizations/resources/logs/client/Client.ts">list</a>({ ...params }) -> IcePanel.LogsListResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List organization logs (only available on the scale plan and above)
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.logs.list({
    organizationId: "organizationId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.OrganizationLogsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LogsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.organizations.logs.<a href="/src/api/resources/organizations/resources/logs/client/Client.ts">get</a>({ ...params }) -> IcePanel.LogsGetResponse</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

Find an organization log (only available on the scale plan and above)
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.logs.get({
    organizationId: "organizationId",
    organizationLogId: "organizationLogId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.OrganizationLogFindRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `LogsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Organizations Technologies
<details><summary><code>client.organizations.technologies.<a href="/src/api/resources/organizations/resources/technologies/client/Client.ts">list</a>({ ...params }) -> IcePanel.TechnologiesListResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.technologies.list({
    organizationId: "organizationId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.OrganizationTechnologiesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TechnologiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.organizations.technologies.<a href="/src/api/resources/organizations/resources/technologies/client/Client.ts">create</a>({ ...params }) -> IcePanel.TechnologiesCreateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.technologies.create({
    organizationId: "organizationId",
    body: {
        color: "blue",
        name: "name"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.OrganizationTechnologyCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TechnologiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.organizations.technologies.<a href="/src/api/resources/organizations/resources/technologies/client/Client.ts">get</a>({ ...params }) -> IcePanel.TechnologiesGetResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.technologies.get({
    organizationId: "organizationId",
    catalogTechnologyId: "catalogTechnologyId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.OrganizationTechnologyFindRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TechnologiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.organizations.technologies.<a href="/src/api/resources/organizations/resources/technologies/client/Client.ts">delete</a>({ ...params }) -> Record<string, unknown></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.technologies.delete({
    organizationId: "organizationId",
    catalogTechnologyId: "catalogTechnologyId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.OrganizationTechnologyDeleteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TechnologiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.organizations.technologies.<a href="/src/api/resources/organizations/resources/technologies/client/Client.ts">update</a>({ ...params }) -> IcePanel.TechnologiesUpdateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.technologies.update({
    organizationId: "organizationId",
    catalogTechnologyId: "catalogTechnologyId",
    body: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.OrganizationTechnologyUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `TechnologiesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Organizations Users
<details><summary><code>client.organizations.users.<a href="/src/api/resources/organizations/resources/users/client/Client.ts">list</a>({ ...params }) -> IcePanel.UsersListResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.users.list({
    organizationId: "organizationId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.OrganizationUsersListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.organizations.users.<a href="/src/api/resources/organizations/resources/users/client/Client.ts">delete</a>({ ...params }) -> Record<string, unknown></code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.users.delete({
    organizationId: "organizationId",
    userId: "userId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.OrganizationUserDeleteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.organizations.users.<a href="/src/api/resources/organizations/resources/users/client/Client.ts">update</a>({ ...params }) -> IcePanel.UsersUpdateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.users.update({
    organizationId: "organizationId",
    userId: "userId",
    body: {
        permission: "billing"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.OrganizationUserUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `UsersClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Organizations Logs Stats
<details><summary><code>client.organizations.logs.stats.<a href="/src/api/resources/organizations/resources/logs/resources/stats/client/Client.ts">byType</a>({ ...params }) -> IcePanel.OrganizationLogStatsListByType</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List total counts of actions for each action type (e.g. diagram-content-update, model-object-create)
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.logs.stats.byType({
    organizationId: "organizationId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.OrganizationLogStatsByTypeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StatsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.organizations.logs.stats.<a href="/src/api/resources/organizations/resources/logs/resources/stats/client/Client.ts">byEntity</a>({ ...params }) -> IcePanel.ActionLogStatsListByEntity</code></summary>
<dl>
<dd>

#### 📝 Description

<dl>
<dd>

<dl>
<dd>

List total counts of organizations for each entity identifier
</dd>
</dl>
</dd>
</dl>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.logs.stats.byEntity({
    organizationId: "organizationId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.OrganizationLogStatsByEntityRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `StatsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Organizations Users Invites
<details><summary><code>client.organizations.users.invites.<a href="/src/api/resources/organizations/resources/users/resources/invites/client/Client.ts">list</a>({ ...params }) -> IcePanel.InvitesListResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.users.invites.list({
    organizationId: "organizationId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.OrganizationUserInvitesListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvitesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.organizations.users.invites.<a href="/src/api/resources/organizations/resources/users/resources/invites/client/Client.ts">create</a>({ ...params }) -> IcePanel.InvitesCreateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.users.invites.create({
    organizationId: "organizationId",
    body: {
        email: "email",
        expiresAt: "2024-01-15T09:30:00Z",
        permission: "billing"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.OrganizationUserInviteCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvitesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.organizations.users.invites.<a href="/src/api/resources/organizations/resources/users/resources/invites/client/Client.ts">revoke</a>({ ...params }) -> IcePanel.InvitesRevokeResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.organizations.users.invites.revoke({
    organizationId: "organizationId",
    organizationUserInviteId: "organizationUserInviteId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.OrganizationUserInviteRevokeRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `InvitesClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Tags Groups
<details><summary><code>client.tags.groups.<a href="/src/api/resources/tags/resources/groups/client/Client.ts">list</a>({ ...params }) -> IcePanel.GroupsListResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.groups.list({
    landscapeId: "landscapeId",
    versionId: "versionId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.TagGroupsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.groups.<a href="/src/api/resources/tags/resources/groups/client/Client.ts">create</a>({ ...params }) -> IcePanel.GroupsCreateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.groups.create({
    landscapeId: "landscapeId",
    versionId: "versionId",
    body: {
        icon: "bug",
        index: 1.1,
        name: "name"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.TagGroupCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.groups.<a href="/src/api/resources/tags/resources/groups/client/Client.ts">get</a>({ ...params }) -> IcePanel.GroupsGetResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.groups.get({
    landscapeId: "landscapeId",
    versionId: "versionId",
    tagGroupId: "tagGroupId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.TagGroupFindRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.groups.<a href="/src/api/resources/tags/resources/groups/client/Client.ts">upsert</a>({ ...params }) -> IcePanel.GroupsUpsertResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.groups.upsert({
    landscapeId: "landscapeId",
    versionId: "versionId",
    tagGroupId: "tagGroupId",
    icon: "bug",
    index: 1.1,
    name: "name"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.TagGroupUpsertRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.groups.<a href="/src/api/resources/tags/resources/groups/client/Client.ts">delete</a>({ ...params }) -> IcePanel.GroupsDeleteResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.groups.delete({
    landscapeId: "landscapeId",
    versionId: "versionId",
    tagGroupId: "tagGroupId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.TagGroupDeleteRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.tags.groups.<a href="/src/api/resources/tags/resources/groups/client/Client.ts">update</a>({ ...params }) -> IcePanel.GroupsUpdateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.tags.groups.update({
    landscapeId: "landscapeId",
    versionId: "versionId",
    tagGroupId: "tagGroupId",
    body: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.TagGroupUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `GroupsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

## Versions Reverts
<details><summary><code>client.versions.reverts.<a href="/src/api/resources/versions/resources/reverts/client/Client.ts">list</a>({ ...params }) -> IcePanel.RevertsListResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.versions.reverts.list({
    landscapeId: "landscapeId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.VersionRevertsListRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevertsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.versions.reverts.<a href="/src/api/resources/versions/resources/reverts/client/Client.ts">create</a>({ ...params }) -> IcePanel.RevertsCreateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.versions.reverts.create({
    landscapeId: "landscapeId",
    body: {
        notes: "notes",
        versionId: "versionId"
    }
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.VersionRevertCreateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevertsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.versions.reverts.<a href="/src/api/resources/versions/resources/reverts/client/Client.ts">get</a>({ ...params }) -> IcePanel.RevertsGetResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.versions.reverts.get({
    landscapeId: "landscapeId",
    versionRevertId: "versionRevertId"
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.VersionRevertFindRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevertsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>

<details><summary><code>client.versions.reverts.<a href="/src/api/resources/versions/resources/reverts/client/Client.ts">update</a>({ ...params }) -> IcePanel.RevertsUpdateResponse</code></summary>
<dl>
<dd>

#### 🔌 Usage

<dl>
<dd>

<dl>
<dd>

```typescript
await client.versions.reverts.update({
    landscapeId: "landscapeId",
    versionRevertId: "versionRevertId",
    body: {}
});

```
</dd>
</dl>
</dd>
</dl>

#### ⚙️ Parameters

<dl>
<dd>

<dl>
<dd>

**request:** `IcePanel.VersionRevertUpdateRequest` 
    
</dd>
</dl>

<dl>
<dd>

**requestOptions:** `RevertsClient.RequestOptions` 
    
</dd>
</dl>
</dd>
</dl>


</dd>
</dl>
</details>
