/**
 * CorpPortal - Dynamic Content Generation Script
 * 
 * Description: This script handles the dynamic generation of portal content 
 * based on data from indexBack.json, including main links and modal windows.
 * Author: Ufuk Yavuzer
 * Created: March 24, 2025
 * Version: 1.0
 * Dependencies: jQuery, Bootstrap
 */
$(document).ready(function() {
    $.getJSON('indexBack.json', function(data) {
        // Set page title
        $('#pageTitle').text(data.header.title);

        // Generate header
        const headerContainer = $('#headerContainer');
        headerContainer.html(`
            <a href="${data.header.href}">
                <img src="${data.header.logo}?t=${Date.now()}" class="eee-logo rounded" alt="">
            </a>
        `);

        // Generate main links
        const mainLinksContainer = $('#mainLinksContainer');
        data.mainLinks.forEach(link => {
            const timestamp = link.timestamp ? `?t=${Date.now()}` : '';
            const iconOrImage = link.icon 
                ? `<i class="fa ${link.icon} fa-5x"></i>` 
                : `<img src="${link.image}" alt="${link.text}">`;
            const hrefOrModal = link.href 
                ? `href="${link.href}${timestamp}" target="_self"`
                : `href="#" data-toggle="modal" data-target="#${link.modal}"`;

            const linkHtml = `
                <div class="col-xs-12 col-sm-4 col-md-4 col-lg-3 col-xl-2">
                    <a ${hrefOrModal}>
                        <div>
                            ${iconOrImage}
                            <p>${link.text}</p>
                        </div>
                    </a>
                </div>
            `;
            mainLinksContainer.append(linkHtml);
        });

        // Generate modals
        const modalContainer = $('#modalTemplates');
        Object.keys(data.modals).forEach(modalId => {
            const modal = data.modals[modalId];
            let modalContent = `
                <div class="modal fade" id="${modalId}" tabindex="-1" role="dialog" aria-labelledby="${modalId}Label">
                    <div class="modal-dialog modal-lg" role="document">
                        <div class="modal-content">
                            <div class="modal-header">
                                <button type="button" class="close" data-dismiss="modal" aria-label="Close">
                                    <span aria-hidden="true">×</span>
                                </button>
                                <h4 class="modal-title" id="${modalId}Label">${modal.title}</h4>
                            </div>
                            <div class="modal-body">
                                ${modal.description ? `<p>${modal.description}</p>` : ''}
                                <table class="table table-striped">
                                    ${modal.items.map(item => `
                                        <tr>
                                            <td><a href="${item.href}" target="_self">${item.text}</a></td>
                                            ${item.date ? `<td style="text-align: right;">${item.date}</td>` : ''}
                                        </tr>
                                    `).join('')}
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            `;
            modalContainer.append(modalContent);
        });
    });

    window.trackButtonClick = function() {
        console.log('Google search has been triggered.');
    };
});
