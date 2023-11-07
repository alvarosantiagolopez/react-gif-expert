import { render, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('pruebas en GifExpertApp', () => {

    test('debe de hacer match con el snapshot', () => {

        const { container } = render(<GifExpertApp />)
        expect(container).toMatchSnapshot();

    });

    test('debe de hacer match con el snapshot', () => {

        render(<GifExpertApp />)


    });

});