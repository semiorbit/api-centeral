# Semiorbit API Central

A set of javascript functions for:

* Wrapping axios methods.
* Preparing http urls.
* Preparing request parameters.
* Preparing request form data.
* Preparing blob data to be sent to API.
* Sending requests to API.


### Config

On project startup define axios instance to be used.

```javascript
ApiCentralConfig.setAxiosInstance(instance);
```

### API Central Functions

```javascript
apiUrl(apiAction, params);
```

```javascript
prepareUrlParams(params);
```

```javascript
prepareFormData(params);
```

```javascript
prepareFormDataWithBlob(params, fnList);
```

```javascript
apiCall(url, params);
```

```javascript
apiCallPost(url, params);
```

```javascript
apiCallFormData(url, params);
```

```javascript
apiCallFormDataWithBlob(url, params, fnList);
```

```javascript
apiSubmitFormPost(url, params);
```
