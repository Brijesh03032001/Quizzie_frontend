import React from 'react';
import './analytics.css'; // Import your CSS file for styling
import editUrl from './assets/uil_edit.png'
import DeleteUrl from './assets/material-symbols_delete.png'
import ShareUrl from './assets/material-symbols_share.png'
function Analytics() {
    const generateShareLink = (quizId) => {
        const shareLink = `https://example.com/quiz/${quizId}`;
        console.log('Shareable link:', shareLink);
        // For a real implementation, you might want to copy the link to the clipboard or open a share modal.
      };
  return (
    <div className="Dashboard_analyticsScreen__Y3Mwp">
      <h1 className="Dashboard_analyticsHeading__uT3Da">Quiz Analytics</h1>
      <table className="Dashboard_analyticsTable__T4MBV">
        <thead>
          <tr>
            <th>S.No</th>
            <th>Quiz Name</th>
            <th>Created on</th>
            <th>Impression</th>
            <th></th>
            <th></th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>1</td>
            <td>anc</td>
            <td>1/21/2024</td>
            <td>0</td>
            <td>
            <img src={editUrl} alt="Edit" onClick={() => window.location.href = 'https://example.com/edit/1'} />
              <img src={DeleteUrl} alt="Delete" onClick={() => window.location.href = 'https://example.com/delete/1'} />
              <img src={ShareUrl} alt="Share" onClick={() => generateShareLink(1)} />
          
            </td>
            <td style={{ cursor: 'pointer', textDecoration: 'underline' }}>Question Wise Analysis</td>
          </tr>
          <tr>
            <td>2</td>
            <td>loll</td>
            <td>1/21/2024</td>
            <td>0</td>
            <td>
            <img src={editUrl} alt="Edit" onClick={() => window.location.href = 'https://example.com/edit/1'} />
              <img src={DeleteUrl} alt="Delete" onClick={() => window.location.href = 'https://example.com/delete/1'} />
              <img src={ShareUrl} alt="Share" onClick={() => generateShareLink(1)} />
          
            </td>
            <td style={{ cursor: 'pointer', textDecoration: 'underline' }}>Question Wise Analysis</td>
          </tr>
        </tbody>
      </table>
    </div>
  );
}

export default Analytics;
