
        function toggleMenu() {
            var navList = document.getElementById('nav-list');
            navList.classList.toggle('show');
        }

        function getResume()
        {
            window.open('LDCE_COMPUTER_RUTVA PATADIYA_RESUME.pdf','_blank');
        }
        function getGithub()
        {
            window.open('https://github.com/Rutva-Patadiya','_blank');
        }



        document.getElementById('verificationForm').addEventListener('submit', function(event) {
            event.preventDefault();
            const checkbox = document.getElementById('notRobot');
            const message = document.getElementById('message');
        
            if (checkbox.checked) {
                message.textContent = 'Verification successful! You are not a robot.';
                message.style.color = 'green';
            } else {
                message.textContent = 'Please confirm you are not a robot.';
                message.style.color = 'red';
            }
        });
        