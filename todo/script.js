
        let tasks = []; let filter = 'all';
        const input = document.getElementById('taskInput');
        input.addEventListener('keypress', e => { if (e.key === 'Enter') addTask() });
        document.querySelectorAll('.chip').forEach(btn => btn.onclick = () => { document.querySelectorAll('.chip').forEach(b => b.classList.remove('active')); btn.classList.add('active'); filter = btn.dataset.filter; render(); });
        function addTask() { const text = input.value.trim(); if (!text) return; tasks.unshift({ id: Date.now(), text, done: false }); input.value = ''; render(); }
        function toggleTask(id) { tasks = tasks.map(t => t.id === id ? { ...t, done: !t.done } : t); render(); }
        function deleteTask(id) { tasks = tasks.filter(t => t.id !== id); render(); }
        function render() { const list = document.getElementById('list'); let filtered = tasks.filter(t => filter === 'all' || (filter === 'pending' && !t.done) || (filter === 'completed' && t.done)); list.innerHTML = filtered.map(t => `<div class='item ${t.done ? 'done' : ''}'><div class='left'><input class='check' type='checkbox' ${t.done ? 'checked' : ''} onchange='toggleTask(${t.id})'><span class='text'>${t.text}</span></div><button class='del' onclick='deleteTask(${t.id})'>Delete</button></div>`).join(''); document.getElementById('count').textContent = tasks.filter(t => !t.done).length; }
        render();
