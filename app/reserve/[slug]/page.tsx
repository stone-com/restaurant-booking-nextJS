import Header from './components/Header';
import Form from './components/Form';

export default function Reserve() {
  return (
    <div className='h-screen border-t'>
      <div className='w-3/5 m-auto py-9'>
        <Header />
        <Form />
      </div>
    </div>
  );
}
