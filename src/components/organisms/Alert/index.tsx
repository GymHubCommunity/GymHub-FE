import { alertParamsProps } from '@/types/alert';
import Swal from 'sweetalert2';

export default function Alert({ errorMessage, status }: alertParamsProps) {
  return Swal.fire({
    icon: 'error',
    html: `<h2 style="word-break: keep-all;"> ${errorMessage}</h2> <br> <p>상태코드: ${status}</p>`,
    showCancelButton: false,
    confirmButtonText: '확인',
    confirmButtonColor: '#111212',
    timer: 3000,
  });
}
