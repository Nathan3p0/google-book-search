import React from 'react'
import ReactDOM from 'react-dom'
import { shallow } from 'enzyme'
import toJson from 'enzyme-to-json'
import BookItem from './BookItem';

describe(`Book Item Component`, () => {
    const booksProp = {
        title: 'Llamas',
        thumbnail: 'http://books.google.com/books/content?id=3pJ-YdPLI2UC&printsec=frontcover&img=1&zoom=5&edge=curl&source=gbs_api',
        authors: 'Peru',
        price: '$15,000',
        snippet: 'Llamas can wear pajamas'
    }
  
    it('renders without errors', () => {
      const div = document.createElement('div');
      ReactDOM.render(<BookItem />, div);
      ReactDOM.unmountComponentAtNode(div);
    })
  
    it('renders empty given no book detail', () => {
      const wrapper = shallow(<BookItem />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  
    it('renders with book info properly', () => {
      const wrapper = shallow(<BookItem bookInfo={booksProp} />)
      expect(toJson(wrapper)).toMatchSnapshot()
    })
  })