export default function SimplePopup({ onClose }) {
    return (
        <div style={{ position: 'fixed', top: '50%', left: '50%', transform: 'translate(-50%, -50%)', backgroundColor: 'white', padding: '20px', zIndex: 1000 }}>
            <h2>Order Successful!</h2>
            <p>Your order has been placed successfully.</p>
            <button onClick={onClose}>Close</button>
        </div>
    );
}
