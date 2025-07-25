import { fireEvent, render, screen } from '@testing-library/react';
import Post from '.';
import PostComment from '.';

describe('Teste para o componente PostComment', () => {
    it('Deve renderizar o componente corretamente', () => {
        render(<PostComment/>);
        expect(screen.getByText('Comentar')).toBeInTheDocument();
    });
});

test('Adicionar 2 comentários', () => {
    render(<PostComment />);
    const input = screen.getByPlaceholderText('Digite seu comentário...');
    const button = screen.getByText('Comentar');

    fireEvent.change(input, { target: { value: 'Comentário teste' } }); //primeiro comentário
    fireEvent.click(button); //primeiro clique

    expect(screen.getByText('Comentário teste')).toBeInTheDocument();

    fireEvent.change(input, { target: { value: 'Comentário teste 2' } }); //segundo comentário
    fireEvent.click(button); //segundo clique

    expect(screen.getByText('Comentário teste 2')).toBeInTheDocument();
});
