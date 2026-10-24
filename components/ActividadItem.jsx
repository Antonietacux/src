import React from 'react';

function ActividadItem({ tituloActividad, duracion, etapaDidactica }) {
    return (
        <div style={{ border: '1px solid #5f9ceb', padding: '12px 15px', borderRadius: '6px', marginBottom: '10px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: '#ffffff' }}>
            <div>
                <span style={{ background: '#70a0d8', color: '#db711a', padding: '2px 8px', borderRadius: '4px', fontSize: '0.75em', fontWeight: 'bold' }}>{etapaDidactica}</span>
                <h4 style={{ margin: '5px 0 0 0', color: '#1f4d97', fontSize: '0.95em' }}>{tituloActividad}</h4>
            </div>
            <span style={{ fontSize: '0.85em', color: '#2159a7' }}>⏱️ {duracion}</span>
        </div>
    );
}

export default ActividadItem;

