// Base de datos de las reacciones del simulador según el ejercicio de clase
const data = {
    scen1: {
        ai: "🚨 DETECTADO: Rostro con parámetros de tristeza (boca hacia abajo -15%). ACCIÓN: Reproducir sonido alegre en 0.2 segundos. Enviar alerta académica por falta de atención.",
        human: "❤️ NOTA: El alumno no me mira a los ojos y escribe lento. Me acerco en silencio al terminar la clase, le pregunto por su familia y le recuerdo que su valor no depende de una nota.",
        verdict: "La IA solo RECONOCE patrones matemáticos de tristeza. El humano SIENTE empatía real y protege la salud mental del estudiante."
    },
    scen2: {
        ai: "❌ ERROR DETECTADO en pregunta 3. Corrección instantánea ejecutada. Restar 2 puntos automáticamente. Enviando ejercicio de refuerzo idéntico de inmediato.",
        human: "📝 Veo que te equivocaste en lo mismo que ayer. No necesitas más tarea, necesitas un descanso. Mañana lo explicamos usando dibujos antes de empezar.",
        verdict: "La IA corrige instantáneamente de forma perfecta (su mayor ventaja), pero carece de la flexibilidad humana para entender el agotamiento."
    },
    scen3: {
        ai: "🤖 DEFINICIÓN: La empatía es la capacidad de comprender los sentimientos de otros. Iniciando simulación de frase empática preprogramada: 'Entiendo tu dolor'.",
        human: "🗣️ No puedo darte una definición matemática. La empatía es cuando lloro contigo porque sé lo que duele fallar, o cuando celebro tu éxito como si fuera mío.",
        verdict: "Si la IA imita la empatía a la perfección, sigue siendo falsa. La empatía artificial es solo un código de imitación vacío."
    }
};

document.addEventListener('DOMContentLoaded', () => {
    const buttons = document.querySelectorAll('.scenario-btn');
    const aiBox = document.getElementById('ai-response');
    const humanBox = document.getElementById('human-response');
    const verdictBox = document.getElementById('verdict-text');

    function updateSimulator(scenarioKey) {
        // Efecto de parpadeo/carga rápido
        aiBox.textContent = "Calculando...";
        humanBox.textContent = "Pensando...";
        
        setTimeout(() => {
            aiBox.textContent = data[scenarioKey].ai;
            humanBox.textContent = data[scenarioKey].human;
            verdictBox.textContent = data[scenarioKey].verdict;
        }, 200);
    }

    // Escuchar los clicks de los botones
    buttons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            // Cambiar clase activa visualmente
            buttons.forEach(b => b.classList.remove('active'));
            e.currentTarget.classList.add('active');
            
            // Actualizar datos
            const scenario = e.currentTarget.getAttribute('data-scenario');
            updateSimulator(scenario);
        });
    });

    // Iniciar con el primer escenario por defecto
    updateSimulator('scen1');
});
