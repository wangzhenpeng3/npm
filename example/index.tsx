import 'react-app-polyfill/ie11';
import * as React from 'react';
import * as ReactDOM from 'react-dom';
import {Button} from '../.';

const App = () => {
    return (
        <div>
            <Button type={'primary'}>primary</Button>
            <Button type={'secondary'}>secondary</Button>
            <Button type={'success'}>success</Button>
            <Button type={'danger'}>danger</Button>
            <Button type={'warning'}>warning</Button>
            <Button type={'info'}>info</Button>
            <Button type={'light'}>light</Button>
            <Button type={'dark'}>dark</Button>
            <Button type={'link'}>link</Button>
            <br/>
            <br/>
            <Button type={'primary'} outline>primary</Button>
            <Button type={'secondary'} outline>secondary</Button>
            <Button type={'success'} outline>success</Button>
            <Button type={'danger'} outline>danger</Button>
            <Button type={'warning'} outline>warning</Button>
            <Button type={'info'} outline>info</Button>
            <Button type={'light'} outline>light</Button>
            <Button type={'dark'} outline>dark</Button>
            <Button type={'link'} outline>link</Button>
            <br/>
            <br/>
            <Button type={'primary'} size={'small'}>primary small</Button>
            <Button type={'secondary'} size={'large'} outline>secondary large</Button>
            <br/>
            <br/>
            <Button type={'warning'} block>warning</Button>
            <Button type={'danger'} outline block>danger</Button>
            <br/>
            <br/>
            <Button type={'primary'} onClick={()=>console.log(111)}>primary</Button>
            <Button type={'primary'} disabled onClick={()=>console.log(222)}>primary</Button>

        </div>
    );
};

ReactDOM.render(<App/>, document.getElementById('root'));
