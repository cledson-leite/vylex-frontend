'use client';

import { useRouter } from 'next/navigation';
import { useState } from 'react';
import { saveProductAction } from './action';
import './page.sass';
interface FormState {
  message?: string;
}

function useFormState(
  action: (prevState: FormState, formData: FormData) => Promise<FormState>,
  initialState: FormState,
) {
  const [state, setState] = useState<FormState>(initialState);

  const formAction = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const formData = new FormData(event.currentTarget);
    const result = await action(state, formData);
    setState(result);
    window.location.href = '/product';
  };

  return [state, formAction] as const;
}

export default function SaveProductPage() {
  const [state, formAction] = useFormState(saveProductAction, {
    message: undefined,
  });
  const router = useRouter();

  const handleCancel = () => {
    router.back();
  };

  return (
    <div className="container">
      <header className="header">
        <h1>
          Salvar Novo <span className="highlight">Produto</span>
        </h1>
      </header>
      <main className="form-group">
        <form className="form" onSubmit={formAction}>
          {state.message && <h3>{state.message}</h3>}
          <div className="form-container">
            <div className="input-group">
              <p>
                <label htmlFor="name">Nome do Produto</label>
                <input type="text" id="name" name="name" required />
              </p>
              <p>
                <label htmlFor="quantity">Quantidade</label>
                <input type="number" id="quantity" name="quantity" required />
              </p>
              <p>
                <label htmlFor="price">Preço Unitário</label>
                <input
                  type="number"
                  step="0.01"
                  id="price"
                  name="price"
                  required
                />
              </p>
            </div>
            <div className="button-group">
              <button
                type="button"
                onClick={() => {
                  const form = document.querySelector('form');
                  if (form) form.reset();
                }}
              >
                Limpar
              </button>
              <button type="button" onClick={handleCancel}>
                Cancelar
              </button>
              <button type="submit">Salvar</button>
            </div>
          </div>
        </form>
      </main>
    </div>
  );
}
