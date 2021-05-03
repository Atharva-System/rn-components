# Installation

Using npm

`npm install rn-component`

Using yarn

`yarn add rn-component`

# Usage

## 1. InlineImageTextInput
You also need to install [react-native-responsive-fontsize](https://github.com/heyman333/react-native-responsive-fontSize)

You can also use props of [TextInput](https://reactnative.dev/docs/textinput)

```jsx
import { InlineImageTextInput } from 'react-component'

handleChangeText=(text)=>{
        console.log(text)
}

<InlineImageTextInput
    handleChangeText={this.handleChangeText.bind(this}
    placeholder="Enter Your Email"
    keyboardType="email"
    icon={require("../../email.png")}
    value={this.state.email}
    isSecureTextEntry={false}
    errorMessage={this.state.errorMessage}
    isSubDomain={true}
    subDomain=".subdomain.com"
    customStyle={{fontSize:16,color:"black"}
    />
```
#### Props
| Props             | Type         | Default         | Optional | Description                         |
|-------------------|--------------|-----------------|----------|-------------------------------------|
| handleChangeText  | func         | null            | no       | callback that return the text value |
| placeholder       | string       | null            | Yes      | Placeholder text                    |
| keyboardType      | string       | default         | Yes      | keyboardType like email,numeric     |
| icon              | image source | null            | Yes      | icon beside text input              |
| value             | string       | empty           | Yes      | value of text input                 |
| isSecureTextEntry | bool         | false           | Yes      | to hide or show text on textinput   |
| errorMessage      | string       | empty           | Yes      | to show error of textinput field    |
| isSubDomain       | bool         | false           | Yes      | show domain text or not             |
| isEditable        | bool         | true            | Yes      | allow user to input text or not     |
| pointerEvent      | string       | auto            | Yes      | allow user touch or not             |
| subDomain         | string       | .ensurexper.com | Yes      | domain text for show                |
| customStyle       | object       | null            | Yes      | text style for textinput            |

## 2. ProgressiveImage
```jsx
import { ProgressiveImage } from 'react-component'

<ProgressiveImage
    resizeMode="contain"
    thumbnailSource={require("../../placeholder.png")}
    source={{url:this.state.image}}
    imageStyle={{width:100,height:100}}
    />
```
#### Props
| Props           | Type   | Default        | Optional | Description                      |
|-----------------|--------|----------------|----------|----------------------------------|
| containerStyle  | object | null           | Yes      | image container style            |
| thumbnailSource | source | static given   | Yes      | thumb image before loading image |
| source          | source | null           | No       | image url or local image         |
| resizeMode      | string | stretch        | Yes      | image resize mode                |

## 3. ListLoadMore

You can also use props of <a href="https://reactnative.dev/docs/flatlist">FlatList</a>


```jsx
import { ListLoadMore } from 'react-component'

<ListLoadMore 
data={[]}
refreshing={false}
renderItem={(data,index)=>{return(<View><Text>{data.toString()}</Text></View>)}}
onNextPageLoad={{nextPage}=>{console.log(nextPage)}}
loaderSize="small"
/>
```


#### Props


| Props             | Type   | Default  | Optional | Description                                          |
|-------------------|--------|----------|----------|------------------------------------------------------|
| containerStyle    | object | {flex:1} | Yes      | container style of list                              |
| listStyle         | object | {flex:1} | Yes      | style of list                                        |
| data              | array  | []       | No       | data for list                                        |
| refreshing        | bool   | false    | Yes      | for pull to refresh                                  |
| renderItem        | func   | null     | No       | to render list item                                  |
| reachedThreshHold | number | 0.01     | Yes      | threshold for pagination from where pagination start |
| onNextPageLoad    | func   | null     | Yes      | get next page when list reached to its threashold    |
| renderFooter      | func   | null     | Yes      | render view for show loader at the bottom of list    |
| loaderSize        | string | small    | Yes      | size of loader in footer view                        |

## 4. GridLoadMore


You can also use props of <a href="https://reactnative.dev/docs/flatlist">FlatList</a>


```jsx
import { GridLoadMore } from 'react-component'
<GridLoadMore 
data={[]}
refreshing={false}
renderItem={(data,index)=>{return(<View><Text>{data.toString()}</Text></View>)}}
onNextPageLoad={{nextPage}=>{console.log(nextPage)}}
loaderSize="small"
numColumn={2}
/>
```


#### Props


| Props             | Type   | Default  | Optional | Description                                          |
|-------------------|--------|----------|----------|------------------------------------------------------|
| containerStyle    | object | {flex:1} | Yes      | container style of list                              |
| listStyle         | object | {flex:1} | Yes      | style of list                                        |
| data              | array  | []       | No       | data for list                                        |
| refreshing        | bool   | false    | Yes      | for pull to refresh                                  |
| renderItem        | func   | null     | No       | to render list item                                  |
| reachedThreshHold | number | 0.01     | Yes      | threshold for pagination from where pagination start |
| onNextPageLoad    | func   | null     | Yes      | get next page when list reached to its threashold    |
| renderFooter      | func   | null     | Yes      | render view for show loader at the bottom of list    |
| loaderSize        | string | small    | Yes      | size of loader in footer view                        |
| numColumn         | number | 2        | No       | for show grid column                                 |

## 4. LoaderButton

#### Example

Example Avilable in <a href='https://github.com/atharvasystem/rn-components/blob/master/ExampleLoaderButton.js'>ExampleLoaderButton.js</a> file

![Alt Text](https://github.com/atharvasystem/rn-components/blob/master/src/screenshots/rn-loader-button.gif)

This component's style is based on default Device's System Dark Mode.


```jsx
import { LoaderButton } from 'react-component'

onButtonClick = () => {
    setLoading(true);
    clearTimeout(this.loadTime);
    setTimeout(() => {
      setLoading(false);
    }, 1000);
 };
<LoaderButton
  title="Login"
  isLoading={this.state.loading}
  onButtonClick={() => onButtonClick()}
  loaderSize="small"
/>
```


#### Props

| Props          | Type   | Default     | Optional | Description                             |
|----------------|--------|-------------|----------|-----------------------------------------|
| title          | string | Title       | No       | Title For button                        |
| isLoading      | bool   | false       | No       | isLoading is boolean for showing loader |
| loaderSize     | string | small       | Yes      | loaderSize is loader size               |
| loaderColor    | string | black       | Yes      | loaderColor is color for loader         |
| onButtonClick  | fucn   | undefined   | No       | callback function for button click      |
| buttonStyle    | object |             | Yes      | style for button view                   |
| textStyle      | object |             | Yes      | style for text                          |
| containerStyle | object | height : 45 | Yes      | style for container view of button      |
