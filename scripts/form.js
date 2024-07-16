const products = [
          {
              id: 'fc-1888',
              name: 'flux capacitor',
              avgRating: 4.5
          },
          {
              id: 'fc-2050',
              name: 'power laces',
              avgRating: 4.7
          },
          {
              id: 'fs-1987',
              name: 'time circuits',
              avgRating: 3.5
          },
          {
              id: 'ac-2000',
              name: 'low voltage reactor',
              avgRating: 3.9
          },
          {
              id: 'jj-1969',
              name: 'warp equalizer',
              avgRating: 5.0
          }
      ];
      
      const productNameSelect = document.getElementById('product-name');
      
      products.forEach(product => {
          const option = document.createElement('option');
          option.value = product.id;
          option.text = product.name;
          productNameSelect.appendChild(option);
      });
      
      // Add event listener to form submission
      document.getElementById('review-form').addEventListener('submit', () => {
          // Increment review counter in localStorage
          let reviewCount = localStorage.getItem('reviewCount');
          if (!reviewCount) {
              reviewCount = 0;
          }
          localStorage.setItem('reviewCount', parseInt(reviewCount) + 1);
      });

      const currentYearSpan = document.getElementById('currentYear');
      const currentYear = new Date().getFullYear();
      if (currentYearSpan) {
          currentYearSpan.textContent = currentYear;
          console.log(`Current Year: ${currentYear}`);
      } else {
          console.error('Element with id "currentYear" not found.');
      }
  
      const modifySpan = document.getElementById('modify');
      const lastModified = new Date(document.lastModified);
      const formattedLastModified = lastModified.toLocaleDateString('en-US', {
          year: 'numeric',
          month: 'long',
          day: 'numeric',
          hour: '2-digit',
          minute: '2-digit'
      });
      if (modifySpan) {
          modifySpan.textContent = formattedLastModified;
          console.log(`Last Modified: ${formattedLastModified}`);
      } else {
          console.error('Element with id "modify" not found.');
      }