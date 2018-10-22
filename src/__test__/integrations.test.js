import React from 'react';
import { mount } from 'enzyme';
import moxios from 'moxios';
import Root from 'Root';
import App from 'components/App';

beforeEach(() => {
    moxios.install();
    moxios.stubRequest('http://jsonplaceholder.typicode.com/comments', {
        status: 200,
        response: [{name: 'Fetched #1'}, {name: 'Fetched #2'}]
    });
});

afterEach(() => {
    moxios.uninstall();
});

it('can fetch a list of comments and display them', (done) => {
    const wrapped = mount(
        <Root>
            <App />
        </Root>
    );

    wrapped.find('.fetch-comments').simulate('click');
    console.log('wrapped.find(\'li\').length', wrapped.find('li').length);

    moxios.wait(() => {
        console.log('setTimeout called');
        wrapped.update();
        wrapped.find('.fetch-comments').simulate('click');
        expect(wrapped.find('li').length).toEqual(2);
        done();
        wrapped.unmount();
    });
});
