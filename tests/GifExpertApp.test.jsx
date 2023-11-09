import { fireEvent, render, renderHook, screen } from '@testing-library/react';
import { GifExpertApp } from '../src/GifExpertApp';

describe('pruebas en GifExpertApp', () => {

    test('debe de hacer match con el snapshot', () => {

        const { container } = render(<GifExpertApp />)
        expect(container).toMatchSnapshot();

    });

    test('debe de no retornar nada si la categoria ya existe', () => {

        const onAddCategory = 'Naruto';

        render(<GifExpertApp />)

        const input = screen.getByRole('textbox');
        const form = screen.getByRole('form');

        fireEvent.input(input, { target: { value: onAddCategory } });
        fireEvent.submit(form);

        fireEvent.input(input, { target: { value: onAddCategory } });
        fireEvent.submit(form);

        const h3Elements = screen.getAllByText('Naruto');

        expect(h3Elements.length).not.toBeGreaterThan(1);










    });

});