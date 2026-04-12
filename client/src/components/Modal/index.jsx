/**
 * A button component that displays a text label.
 *
 * @param {isOpen} - boolean que indica se o modal está aberto ou fechado.
 * @param {onClose} - função que o componente recebe para fechar o modal.
 * @param {children} - conteúdo que o elemento deverá renderizar.
 * @returns {React.ReactElement}
 */

export function Modal ({isOpen, onClose, children, sizeModal, itemsAlign }) {
    if (!isOpen) return null;

    return (
        <div 
        onClick={onClose}
        className={`fixed inset-0 z-50 flex flex-items justify-center ${itemsAlign} bg-black/60 backdrop-blur-[1px] transition-opacity overflow-y-auto overscroll-none`}>
            <div 
            onClick={(e) => e.stopPropagation()}                        
            className={`relative bg-white rounded-2xl w-full ${sizeModal} max-w-md m-4 p-6 animate-fade-in-up`}>

          <button 
          onClick={onClose}
          className="absolute top-4 right-4 text-gray-400 hover:text-gray-900 bg-gray-100 hover:bg-gray-200 rounded-full p-1 transition-colors">
            <i class="bi bi-x-lg"></i>
          </button>

            {children}
            </div>
        </div>
    );
}