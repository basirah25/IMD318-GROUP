function hantar() {
 
        const nama = document.getElementById("name").value;
        const phone = document.getElementById("Phone").value;
        const email = document.getElementById("Email").value;
        const purpose = document.getElementById("purpose").value;
        const rating = document.getElementById("rating").value;
        const complaint = document.getElementById("complaint").value;
        

        const category = document.querySelector('input[name="category"]:checked')?.value || "Not selected";

        alert("Thank you, " + nama);


        const resultDiv = document.getElementById("result");
        resultDiv.style.display = "block";
        resultDiv.innerHTML = `
            <p><strong>Name:</strong> ${nama}</p>
            <p><strong>Phone:</strong> ${phone}</p>
            <p><strong>Email:</strong> ${email}</p>
            <p><strong>Age Category:</strong> ${category}</p>
            <p><strong>Purpose:</strong> ${purpose}</p>
            <p><strong>Message:</strong> ${complaint}</p>
            <p><strong>Rating:</strong> ${rating}/100</p>
        `;
        
        resultDiv.scrollIntoView({ behavior: 'smooth' });
    }

    function largetext(){
        document.getElementById("borang").style.fontSize="20px";
    }

    function smalltext(){
        document.getElementById("borang").style.fontSize="14px";
    }